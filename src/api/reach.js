import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
} from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";

const stdLib = loadStdlib("ALGO");

stdLib.setWalletFallback(
	stdLib.walletFallback({
		providerEnv: "TestNet",
		MyAlgoConnect,
	})
);
// const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];

class Reach {
	standardUnit;
	user;
	stdLib;
	connector;
	contract;

	constructor(stdLib) {
		this.stdLib = stdLib;
		this.standardUnit = stdLib.standardUnit;
		this.connector = stdLib.connector;
	}

	async connecAccount() {
		const account = await this.getDefualtAccount();
		const balance = await this.getbalance(account);
		const address = account.getAddress();
		this.user = { account, balance, address };
		console.log(this.user);
	}

	async getDefualtAccount() {
		return this.stdLib.getDefaultAccount();
	}

	async getbalance(account) {
		const userBalance = await this.stdLib.balanceOf(account);

		console.log(this.toStandardUnit(userBalance));
		return this.toStandardUnit(userBalance, 1);
	}

	toAtomicUnit(amount) {
		return this.stdLib.parseCurrency(amount);
	}

	toStandardUnit(amount, multiplier = 1) {
		return this.stdLib.formatCurrency(amount, multiplier);
	}

	async fundFromFaucet(fundAmount) {
		return await this.stdLib.fundFromFaucet(
			this.user.account,
			this.toAtomicUnit(fundAmount)
		);
	}

	getAttachers(ctcInfo) {
		return this.user.account.contract(backend, JSON.parse(ctcInfo));
	}

	getContract() {
		return this.contract;
	}

	setContract(contract) {
		// this.contract = contract;
		contract.events.log.monitor(this.loggedEvent);
	}

	getRandomNumber() {
		return this.stdLib.hasRandom;
	}

	async loggedEvent({ when, what }) {
		const message = what[0];
		// console.log(message);
		const state = (x) => x.padEnd(22, "\u0000");

		switch (message) {
			case state("intialise-contribution"):
				console.log(`Initiating contract operations!`);
				break;
			case state("timeout"):
				console.log(`The contribution has encountered a timeout `);
				break;
			case state("target-reached"):
				console.log(
					`The conditions are satisfied, transferring funds to the FundRaiser!`
				);
				break;
			case state("target-not-reached"):
				console.log(`The conditions were not satisfied, initiating refund!`);
				break;
			case state("close-contribution"):
				console.log(`The contract is closing!`);
				break;
			default:
				console.log(`An unhandled log...`);
				break;
		}
	}
}

const ReachAPI = new Reach(stdLib);

export default ReachAPI;
