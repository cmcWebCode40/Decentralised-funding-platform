/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
"reach 0.1";

/***
 * - FunRaiser sets saves the Hash ID of the purpose of the fundraising metadata
 * - FundRaiser sets Tagert amount and minimum amount for contributorsList
 * - FundRaiser sets duration for the campaign
 * - Contributors attaches to the deployed contracts and starts contributing desired amount of crypto to the campaign
 * - Funds gets transfered from the contract to the fundrasier account if contract balance hits the targeted amount
 * - Logs user contributions per time to frontend
 * - Log duration
 */

const message = Bytes(22);

export const main = Reach.App(() => {
	const FundRaiser = Participant("FundRaiser", {
		...hasRandom,
		metaDataHash: Bytes(256),
		duration: UInt,
		targetAmount: UInt,
		getContributionNotification: Fun([Tuple(Address, UInt)], Null),
		refundContributors: Fun([], Null),
		ownerCashOut: Fun([], Null),
	});

	const Contributors = API("Contributors", {
		getMetaDataHash: Fun([], Bytes(256)),
		contribute: Fun([UInt], Null),
	});

	const eventLogger = Events({
		log: [message],
	});

	init();

	FundRaiser.only(() => {
		const metaDataHash = declassify(interact.metaDataHash);
		const duration = declassify(interact.duration);
		const targetAmount = declassify(interact.targetAmount);
	});

	FundRaiser.publish(metaDataHash, duration, targetAmount);

	commit();

	FundRaiser.publish();

	eventLogger.log(message.pad("intialise-contribution"));

	const contributorsList = new Map(Address, UInt);

	commit();

	FundRaiser.publish();

	const [timeRemaining, keepGoing] = makeDeadline(duration);

	const INITIAL_COUNT = 1;

	const [count, currentBal, lastAddress] = parallelReduce([
		INITIAL_COUNT,
		balance(),
		FundRaiser,
	])
		.invariant(balance() == currentBal)
		.while(keepGoing())
		.api_(Contributors.getMetaDataHash, () => {
			return [
				(notify) => {
					notify(metaDataHash);
					return [count, balance(), this];
				},
			];
		})
		.api_(Contributors.contribute, (amt) => {
			check(amt > 0, "Contribution too small");
			const payment = amt;
			return [
				payment,
				(notify) => {
					notify(null);
					contributorsList[this] = amt;
					FundRaiser.interact.getContributionNotification([this, amt]);
					return [count + 1, currentBal + payment, this];
				},
			];
		})
		.timeout(timeRemaining(), () => {
			FundRaiser.publish();
			eventLogger.log(message.pad("timeout"));
			return [count, currentBal, lastAddress];
		});
	if (balance() >= targetAmount) {
		eventLogger.log(message.pad("target-reached"));
		FundRaiser.interact.ownerCashOut();
		transfer(balance()).to(FundRaiser);
	}
	transfer(balance()).to(FundRaiser);
	eventLogger.log(message.pad("close-contribution"));
	commit();
	exit();
});
