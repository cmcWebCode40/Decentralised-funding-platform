import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import ReachAPI from "../api/reach.js";
import VeridaAPI from "../api/verida.js";

import * as backend from "../build/index.main.mjs";
import {
	CONNECT_ACCOUNT_VIEW,
	DEPLOYER_INTERACT_VIEW,
	DONATE_AS_ATTACHER_VIEW,
	DONATOION_FORM_VIEW,
	FUND_ACCOUNT_VIEW,
	LOADING_UI_VIEW,
	SELECT_USER_VIEW,
} from "../constants/index.js";

export const ReachContext = createContext();

const RANDOM_TOAST_ID = Math.random();

const ReachContextProvider = ({ children }) => {
	const [views, setViews] = useState({
		view: CONNECT_ACCOUNT_VIEW,
		message: "",
	});
	const [donationData, setDonationData] = useState({});
	const [ctc, setCtc] = useState("");
	const [user, setUser] = useState({
		name: "",
		address: "",
		type: "",
	});
	const [contributions, setContributions] = useState([]);
	const [contractInfo, setContractInfo] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [fundRaisingAlert, setFundRaisingAlert] = useState({
		type: "",
		message: "",
		open: false,
	});

	const loggedEvent = async ({ _, what }) => {
		const message = what[0];
		const state = (x) => x.padEnd(22, "\u0000");

		switch (message) {
			case state("intialise-contribution"):
				toast.success(`Funding portal is now open `, {
					toastId: RANDOM_TOAST_ID,
				});
				if (user.type === DONATOION_FORM_VIEW) {
					setViews({ view: DEPLOYER_INTERACT_VIEW });
				}
				break;
			case state("timeout"):
				const MESSAGE_1 = `The deadline for this project's funding has passed. (Timeout)`;
				toast.warning(MESSAGE_1, {
					toastId: RANDOM_TOAST_ID,
				});
				setFundRaisingAlert({
					message: MESSAGE_1,
					type: "error",
					open: true,
				});
				break;
			case state("target-reached"):
				const MESSAGE_USER = `Congratulations you have reach your target and fund has been transfered to your wallet`;
				const MESSAGE_CONTRIBUTOR = `This project has reached its taget`;
				toast.success(
					user.type === DONATOION_FORM_VIEW
						? MESSAGE_USER
						: MESSAGE_CONTRIBUTOR,
					{
						toastId: RANDOM_TOAST_ID,
					}
				);
				setFundRaisingAlert({
					message:
						user.type === DONATOION_FORM_VIEW
							? MESSAGE_USER
							: MESSAGE_CONTRIBUTOR,
					type: "success",
					open: true,
				});
				break;
			case state("target-not-reached"):
				const MESSAGE_USER_1 = `Unfortunately your target was not reached so  your  donators will have the right to claim their funds back`;
				const MESSAGE_CONTRIBUTOR_1 = `Unfortunately this project did not reach its target`;
				toast.error(
					user.type === DONATOION_FORM_VIEW
						? MESSAGE_USER_1
						: MESSAGE_CONTRIBUTOR_1,
					{
						toastId: RANDOM_TOAST_ID,
					}
				);
				setFundRaisingAlert({
					message:
						user.type === DONATOION_FORM_VIEW
							? MESSAGE_USER_1
							: MESSAGE_CONTRIBUTOR_1,
					type: "error",
					open: true,
				});
				break;
			case state("close-contribution"):
				toast.success(`Close funding`, {
					toastId: RANDOM_TOAST_ID,
				});
				setViews({ view: SELECT_USER_VIEW });
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
			setViews({ view: FUND_ACCOUNT_VIEW });
		} else {
			setViews({ view: SELECT_USER_VIEW });
		}
	};

	const fundAccount = async (fundAmount) => {
		await ReachAPI.fundFromFaucet(fundAmount);
		setViews({ view: SELECT_USER_VIEW });
	};

	const skipFundAccount = async () => {
		setViews({ view: SELECT_USER_VIEW });
	};

	const seletParticipant = (type) => {
		setUser({ ...user, type });
		setViews({ view: type });
	};

	const contribute = async (amount) => {
		setIsLoading(true);
		try {
			await ctc.apis.Contributors.contribute(ReachAPI.toAtomicUnit(amount));
			toast.success(`your donation was succesfully made `, {
				toastId: RANDOM_TOAST_ID,
			});
		} catch (error) {
			toast.success(
				JSON.stringify(`Sorry your Donation failed`, {
					toastId: RANDOM_TOAST_ID,
				})
			);
		} finally {
			setIsLoading(false);
		}
	};

	const deployContract = async (data) => {
		const FundraiserInteractions = {
			...ReachAPI.stdLib.hasRandom,
			targetAmount: ReachAPI.toAtomicUnit(data.targetAmount),
			metaDataHash: data._id,
			duration: data.duration,
			getContributionNotification: (contribution) => {
				setContributions((c) => [
					...c,
					{
						address: contribution[0],
						amount: ReachAPI.toStandardUnit(parseInt(contribution[1])),
					},
				]);
				toast.success(
					`You have received a new donation of from ${contribution[0]}`
				);
			},
			refundContributors: () => {
				toast.success(`Initiating refund`, {
					toastId: RANDOM_TOAST_ID,
				});
			},
			ownerCashOut: () => {
				toast.success(`The FundRaiser cashed out`, {
					toastId: RANDOM_TOAST_ID,
				});
				setViews({ view: SELECT_USER_VIEW });
			},
		};
		try {
			setViews({
				view: LOADING_UI_VIEW,
				message: `Contract deployment in progress....`,
			});
			const ctc = ReachAPI.user.account.contract(backend);
			ctc.events.log.monitor(loggedEvent);
			setCtc(ctc);
			ctc.p.FundRaiser(FundraiserInteractions);
			const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
			setDonationData(data);
			setContractInfo(ctcInfoStr);
			toast.success(
				"Contract created you can now share contract info and seek funds!"
			);
		} catch (error) {
			toast.success(JSON.stringify(error));
			setViews({ view: CONNECT_ACCOUNT_VIEW });
		}
	};

	const attachContract = async (ctcInfoStr) => {
		try {
			setViews({
				view: LOADING_UI_VIEW,
				message: "Fetching Contract information from the contract address... ",
			});
			const ctc = ReachAPI.user.account.contract(
				backend,
				JSON.parse(ctcInfoStr)
			);

			ctc.events.log.monitor(loggedEvent);

			setCtc(ctc);

			const hashValue = await ctc.apis.Contributors.getMetaDataHash();

			const data = await VeridaAPI.getDataWithExternalContext(hashValue);

			setDonationData(data);

			setViews({ view: DONATE_AS_ATTACHER_VIEW });
		} catch (error) {
			toast.error("Error occurred");
			setViews({ view: CONNECT_ACCOUNT_VIEW });
		}
	};

	const reachContextValues = {
		views,
		user,
		setUser,
		setViews,
		isLoading,
		fundAccount,
		connecAccount,
		skipFundAccount,
		contractInfo,
		fundRaisingAlert,
		seletParticipant,
		deployContract,
		contributions,
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
