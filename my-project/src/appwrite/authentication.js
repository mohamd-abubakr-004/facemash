import { Client, Account, ID } from "appwrite";

import all_ENV from "../configENV/configENV";

export const authentication = class {
    client = new Client()
    account

    constructor() {
        this.client
        .setEndpoint(all_ENV.appWriteEndPoint)
        .setProject(all_ENV.appWriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            return await this.account.create(ID.unique(), email, password, name)
        } catch (error) {
            console.log(`appwrite :: createAccount services :: ${error}`);
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(`appwrite :: login services :: ${error}`);
        }
    }

    async logout () {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(`appwrite :: logout services :: ${error}`);
        }
    }

    async getUser () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(`appwrite :: getUser services :: ${error}`);
        }
    }
}

const authenticationServices = new authentication()

export default authenticationServices