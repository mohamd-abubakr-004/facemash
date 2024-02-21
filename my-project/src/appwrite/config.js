import { Client, Databases, ID, Storage, Query } from "appwrite";
import all_ENV from "../configENV/configENV";

const servicesDS = class {
    client = new Client()
    database
    storage

    constructor() {
        this.client.setEndpoint(all_ENV.appWriteEndPoint).setProject(all_ENV.appWriteProjectId)

        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost(postId, { content, postImage, userId, status }) {
        try {
            return await this.database.createDocument(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteCollectionId,
                postId, // post Id
                { content, postImage, userId, status }
            )
        } catch (error) {
            console.log(`appwrite :: createPost services :: ${error}`);
        }
    }

    async updatePost(postId, { content, postImage, status }) {
        try {
            return await this.database.updateDocument(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteCollectionId,
                postId, // post id
                { content, postImage, status }
            )
        } catch (error) {
            console.log(`appwrite :: updatePost services :: ${error}`);
        }
    }

    async deletePost(postId) {
        try {
            return await this.database.deleteDocument(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteCollectionId,
                postId
            )
        } catch (error) {
            console.log(`appwrite :: deletepost services :: ${error}`);
        }
    }

    async getPost(postId) {
        try {
            return await this.database.getDocument(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteCollectionId,
                postId
            )
        } catch (error) {
            console.log(`appwrite :: getPost services :: ${error}`);
        }
    }

    async getPosts(queries = [Query.equal("status", ["active"])]) {
        try {
            return await this.database.listDocuments(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(`appwrite :: getPosts services :: ${error}`);
        }
    }

    // all users name and id save in database

    async userAuthengate(currentUser) {
        try {
            return await this.database.createDocument(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteAllUserIdCollection,
                ID.unique(),
                { name: currentUser.name, userId: currentUser.$id, status: 'active' }
            )
        } catch (error) {
            console.log(`appwrite :: userAuthengate services :: ${error}`);
        }
    }

    async AllUserAuthengate(queries = [Query.equal("status", ["active"])]) {
        try {
            return await this.database.listDocuments(
                all_ENV.appWriteDataBaseId,
                all_ENV.appWriteAllUserIdCollection,
                queries
            )
        } catch (error) {
            console.log(`appwrite :: AllUserAuthengate services :: ${error}`);
        }
    }

    // files handling services

    async uploadFile(file) {
        try {
            return await this.storage.createFile(all_ENV.appWriteStorageId, ID.unique(), file)
        } catch (error) {
            console.log(`appwrite :: uploadFile services :: ${error}`);
        }
    }

    async updateFile(fileId) {
        try {
            return await this.storage.updateFile(all_ENV.appWriteStorageId, fileId)
        } catch (error) {
            console.log(`appwrite :: updateFile services :: ${error}`);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(all_ENV.appWriteStorageId, fileId)
        } catch (error) {
            console.log(`appwrite :: deleteFile services :: ${error}`);
        }
    }

    getFile(fileId) {
        return this.storage.getFilePreview(all_ENV.appWriteStorageId, fileId)
    }
}

const ServicesDS = new servicesDS()

export default ServicesDS