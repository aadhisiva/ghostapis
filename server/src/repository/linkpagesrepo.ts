import { Service } from "typedi";
import { getConnection,getRepository } from "typeorm";
import { catchError } from "../apiresponse/responseTemplate";
/*****
 * entitytables : tablenames
 */
import { Posts } from "../entity/posts";

@Service()
export class LinksPageRepo { 
    async fetchAllLinks(){
        try{
            let result = [];
        let resLinks =   await getConnection().manager.find(Posts);
        let totalLength: any = resLinks.filter((res)=>(res.url)).length + resLinks.filter((res)=>(res.url)).length
            result.push({totalurllength : totalLength})
         await Promise.all(resLinks.map(async (res) : Promise<any> =>{
             result.push({internal_links: res.url,external_links: res.feature_image})
        }))
        return result;
        } catch(e){
            return catchError(e.message, "dashboardrepo", "InsertAllTags")
        }
    }
}