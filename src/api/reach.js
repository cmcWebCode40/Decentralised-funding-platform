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
	}

	async getDefualtAccount() {
		return this.stdLib.getDefaultAccount();
	}

	async getbalance(account) {
		const userBalance = await this.stdLib.balanceOf(account);
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

	getRandomNumber() {
		return this.stdLib.hasRandom;
	}
}

const ReachAPI = new Reach(stdLib);

export default ReachAPI;
