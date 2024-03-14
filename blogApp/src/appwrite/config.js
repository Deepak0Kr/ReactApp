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

}

const service = new Service();

export default service