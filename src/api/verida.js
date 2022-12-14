import { Client, EnvironmentType, Network } from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";
import { PermissionOptionsEnum } from "@verida/client-ts/dist/context/interfaces";
const {
	REACT_APP_VERIDA_TESTNET_DEFAULT_DID_SERVER,
	REACT_APP_CONTEXT_NAME,
	REACT_APP_LOGO_URL,
} = process.env;

const userConfig = {
	environment: EnvironmentType.TESTNET,
	didServerUrl: REACT_APP_VERIDA_TESTNET_DEFAULT_DID_SERVER,
};

class Verida {
	constructor() {
		this.clientContext = new Client(userConfig);
		this.context = null;
		this.db = null;
		this.account = null;
		this.did = null;
		this.isConnected = false;
		this.contextName = REACT_APP_CONTEXT_NAME;
		this.dbName = "funding_data66";
	}

	getContext() {
		if (this.context) {
			return this.context;
		}
		throw new Error("Verida account not connected");
	}

	async connect() {
		this.account = new VaultAccount({
			request: {
				logoUrl: REACT_APP_LOGO_URL,
			},
		});
		this.context = await Network.connect({
			client: {
				environment: EnvironmentType.TESTNET,
			},
			account: this.account,
			context: {
				name: REACT_APP_CONTEXT_NAME,
			},
		});

		if (this.context) {
			this.isConnected = true;
			this.did = await this.context.getAccount().did();
			await this.initDb();
		}
	}

	async getDataWithExternalContext(uri) {
		const decoedURI = this.separateUriPaths(uri);

		const context = await this.clientContext.openExternalContext(
			decoedURI.contextName,
			decoedURI.did
		);

		const db = await context.openExternalDatabase(
			decoedURI.dbName,
			decoedURI.did,
			{
				permissions: {
					read: PermissionOptionsEnum.PUBLIC,
					write: PermissionOptionsEnum.OWNER,
				},
				contextName: decoedURI.contextName,
				readOnly: true,
			}
		);

		const data = await db.get(decoedURI.id);

		return data;
	}

	async initDb() {
		this.db = await this.getContext().openDatabase(this.dbName, {
			permissions: {
				read: PermissionOptionsEnum.PUBLIC,
				write: PermissionOptionsEnum.OWNER,
			},
		});
	}

	async save(data) {
		const response = await this.db.save(data);
		return response;
	}
	async delete(id) {
		const response = await this.db.delete(id);
		return response;
	}

	async get(_rev) {
		const data = await this.db.get(_rev);
		if (data._rev) {
			return data;
		}

		throw new Error("data not found");
	}

	buildUri({ dbName, itemId, did, contextName }) {
		let uri = `hash://${did}/${contextName}/${dbName}/${itemId}`;
		const encodeUri = Buffer.from(uri).toString("base64");
		return encodeUri;
	}

	separateUriPaths(uri) {
		const decodedUri = Buffer.from(uri, "base64").toString("utf-8");
		const regex = /^hash:\/\/(.*)\/(.*)\/(.*)\/(.*)$/i;
		const matches = decodedUri.match(regex);

		if (!matches) {
			throw new Error("Invalid URI");
		}
		const did = matches[1];
		const contextName = matches[2];
		const dbName = matches[3];
		const id = matches[4];

		return {
			did,
			contextName,
			dbName,
			id,
		};
	}

	async disconnect() {
		await this.getContext().getAccount().disconnect(VUE_APP_CONTEXT_NAME);
		this.isConnected = false;
		this.db = null;
		this.did = "";
		this.context = null;
		this.error = null;
	}
}

const VeridaAPI = new Verida();

export default VeridaAPI;
