import {Client,Databases,Storage,Query,ID  } from 'appwrite'
import conf from '../conf/conf'

export class Service{
    client = new Client();
    databases ;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases =new Databases(this.client)
        this.bucket =new Storage(this.client)
    }

    async createPost({title,slug,content,featureImage,status,userID}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featureImage,status,userID})
        } catch (error) {
            console.log("appwrite service :: createPost :: error",error);
        }
    }

    async updatePost(slug,{title,content,featureImage,status}){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featureImage,status}
                )
        }catch(error){
            console.log("appwrite service:: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)

                return true;
        }catch(error){
            console.log("appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return    await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )       
        } catch (error) {
            console.log("appwrite services :: getPost :: error", error  );
        }
    }

    async getPosts(quaries=[Query.equal("status","active")]){
        try {
            
        } catch (error) {
            log
        }
    }
}

const service = new Service();

export default service