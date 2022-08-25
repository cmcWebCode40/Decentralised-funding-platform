import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const APIs = [];

let user = null;
let acc = null;
let ctc = null;

acc = await stdlib.newTestAccount(startingBalance);

const isAlice = await ask.ask(`Are you Alice  ?`, ask.yesno);

user = isAlice ? "Alice" : "User";

let done = false;

if (isAlice) {
	ctc = acc.contract(backend);
	ctc.getInfo().then((info) => {
		console.log(`This is the deployed contract info : ${JSON.stringify(info)}`);
	});
} else {
	user = await ask.ask(`Please your name`);
	const info = await ask.ask(
		`Please paste the contract information:`,
		JSON.parse
	);
	ctc = acc.contract(backend, info);
}

const events = ctc.events;

const loggedEvent = async ({ when, what }) => {
	const message = what[0];
	console.log(message);
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
			const bal = await stdlib.balanceOf(acc);
			console.log(
				`The user now has ${stdlib.formatCurrency(bal, 4)} ${
					stdlib.standardUnit
				}`
			);
			done = true;
			ask.done();
			process.exit(0);
			break;
		default:
			console.log(`An unhandled log...`);
			break;
	}
};

events.log.monitor(loggedEvent);

const interact = {
	...stdlib.hasRandom,
	targetAmount: stdlib.parseCurrency(50),
	metaDataHash: "https://explorer.perawallet.app/asa-verification/",
	duration: { ETH: 10000, ALGO: 30, CFX: 10000 }[stdlib.connector],
	getContributionNotification: (addr) => {
		console.log(`${addr[0]}`);
	},
	refundContributors: () => {
		console.log(`Initiating refund`);
	},
	ownerCashOut: () => {
		console.log(`The FundRaiser cashed out`);
	},
};

if (isAlice) {
	await Promise.all([backend.FundRaiser(ctc, interact)]);
} else {
	const start = async () => {
		const runAPIs = async (who) => {
			acc.setDebugLabel(who);
			APIs.push([who, acc]);
			try {
				const result = await ctc.apis.Contributors.getMetaDataHash();
				console.log("hash value", result);
				console.log(`${who} paid ${10}`);
				await ctc.apis.Contributors.contribute(stdlib.parseCurrency(30));
			} catch (error) {
				console.log(error);
				console.log(`Sorry ${who}, your contribution was not accepted`);
			}
		};
		await runAPIs(user);
	};
	start();
}

while (!done) {
	await stdlib.wait(1);
}

process.exit(0);
