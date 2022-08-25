import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import ReachAPI from "../api/reach.js";
import VeridaAPI from "../api/verida.js";

import * as backend from "../build/index.main.mjs";

export const ReachContext = createContext();

const ReachContextProvider = ({ children }) => {
	const [views, setViews] = useState({ view: "ConnectAccount", message: "" });
	const [donationData, setDonationData] = useState({});
	const [ctc, setCtc] = useState("");
	const [user, setUser] = useState({
		name: "",
		address: "",
	});
	const [contributions, setContributions] = useState([]);
	const [contractInfo, setContractInfo] = useState("");
	const [fundRaisingAlert, setFundRaisingAlert] = useState({
		type: "",
		message: "",
		open: false,
	});

	const loggedEvent = async ({ when, what }) => {
		const message = what[0];
		const state = (x) => x.padEnd(22, "\u0000");

		switch (message) {
			case state("intialise-contribution"):
				toast.success(`Initiating contract operations!`);
				break;
			case state("timeout"):
				toast.warning(
					`This funding has reached its deadline !! (A timeout has occured)`
				);
				break;
			case state("target-reached"):
				toast.success(
					`Congratulations you have reach your target and fund has been transfered to your wallet`
				);
				setFundRaisingAlert({
					message: `Congratulations you have reach your target and fund has been transfered to your wallet`,
					type: "success",
					open: true,
				});
				console.log(
					`The conditions are satisfied, transferring funds to the FundRaiser!`
				);
				break;
			case state("target-not-reached"):
				toast.error(
					`Unfortunately your target was not reached so  your  donators will have the right to claim their funds back`
				);
				setFundRaisingAlert({
					message: `Unfortunately your target was not reached so  your  donators will have the right to claim their funds back`,
					type: "error",
					open: true,
				});
				break;
			case state("close-contribution"):
				toast.success(`Close funding`);
				getBalance();
				break;
			default:
				console.log(`An unhandled log...`);
				break;
		}
	};

	// Connect with wallet and Add faucet (optional)
	const connecAccount = async () => {
		await ReachAPI.connecAccount();
		setUser({
			...user,
			address: ReachAPI.user.address,
			balance: `${ReachAPI.user.balance} ${ReachAPI.standardUnit}`,
		});
		if (await ReachAPI.stdLib.canFundFromFaucet()) {
			setViews({ view: "FundAccount" });
		} else {
			setViews({ view: "DeployerOrAttacher" });
		}
	};

	const getBalance = async () => {
		// const balance = await ReachAPI.getbalance(user.account);
		// setUser({
		// 	...user,
		// 	balance: `${balance} ${ReachAPI.standardUnit}`,
		// });
		setViews({ view: "DeployerOrAttacher" });
	};

	const fundAccount = async (fundAmount) => {
		await ReachAPI.fundFromFaucet(fundAmount);
		setViews({ view: "DeployerOrAttacher" });
	};

	const skipFundAccount = async () => {
		setViews({ view: "DeployerOrAttacher" });
	};

	const seletParticipant = (type) => {
		setUser({ ...user, name: type });
		setViews({ view: type });
	};

	const contribute = async (amount) => {
		try {
			await ctc.apis.Contributors.contribute(ReachAPI.toAtomicUnit(amount));
		} catch (error) {
			console.log(error);
			console.log(`Sorry your contribution was not accepted`);
		}
	};

	const deployContract = async (data) => {
		console.log(data);
		const DeployerInteract = {
			...ReachAPI.stdLib.hasRandom,
			targetAmount: ReachAPI.toAtomicUnit(data.targetAmount),
			metaDataHash: data._id,
			// duration: data.duration,
			duration: { ETH: 100, ALGO: 40, CFX: 10000 }[ReachAPI.stdLib.connector],
			getContributionNotification: (contribution) => {
				console.log(`PREV data ${contributions}`);
				setContributions((c) => [
					...c,
					{
						address: contribution[0],
						amount: parseInt(contribution[1]),
					},
				]);
				toast.success(
					`You have received a new donation of from ${contribution[0]}`
				);
			},
			refundContributors: () => {
				console.log(`Initiating refund`);
			},
			ownerCashOut: () => {
				console.log(`The FundRaiser cashed out`);
			},
		};
		try {
			setViews({
				view: "LoadingUI",
				message: `Hold on contract is deploying`,
			});
			const ctc = ReachAPI.user.account.contract(backend);

			ctc.events.log.monitor(loggedEvent);

			setCtc(ctc);
			ctc.p.FundRaiser(DeployerInteract);

			const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);

			setDonationData(data);

			setContractInfo(ctcInfoStr);
			toast.success(
				"Contract created you can now share contract info and seek funds!"
			);
			setViews({ view: "DeployerInteract" });
		} catch (error) {
			console.log("error", { error });
			setViews({ view: "ConnectAccount" });
		}
	};

	const attachContract = async (ctcInfoStr) => {
		try {
			setViews({
				view: "LoadingUI",
				message: "Please attaching to contract",
			});
			const ctc = ReachAPI.user.account.contract(
				backend,
				JSON.parse(ctcInfoStr)
			);

			ctc.events.log.monitor(loggedEvent);

			setCtc(ctc);

			const hashValue = await ctc.apis.Contributors.getMetaDataHash();

			console.log(hashValue);

			const data = await VeridaAPI.getDataWithExternalContext(hashValue);

			setDonationData(data);

			setViews({ view: "DonateAsAttacher" });
		} catch (error) {
			console.log(error);
			toast.error("Error occurred");
		}
	};

	const reachContextValues = {
		//Connect Account
		views,
		user,
		fundAccount,
		connecAccount,
		skipFundAccount,
		contractInfo,
		fundRaisingAlert,

		//Select Participant
		seletParticipant,

		// For Deployer
		deployContract,
		contributions,

		//Attacher
		attachContract,
		contribute,
		donationData,
	};
	return (
		<ReachContext.Provider value={reachContextValues}>
			{children}
		</ReachContext.Provider>
	);
};

export default ReachContextProvider;
