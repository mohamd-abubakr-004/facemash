const all_ENV = {
    appWriteEndPoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDataBaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteStorageId : String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
    appWriteAllUserIdCollection : String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
}

export default all_ENV