import { Service } from "typedi";
import { getConnection,getRepository } from "typeorm";
import { catchError } from "../apiresponse/responseTemplate";
import axios from "axios";
/*****
 * entitytables : tablenames
 */
import { Tags } from "../entity/tags";
import { Authors } from "../entity/authors";
import { Posts } from "../entity/posts";
import { Pages } from "../entity/pages";



@Service()
export class DashBoardRepo { 
    async InsertAllTags(){
        try{
            return await axios.get('https://demo.ghost.io/ghost/api/v3/content/tags?key=22444f78447824223cefc48062').then(async (res) => {
                // console.log("res::::",res.data)
                let instanceData: any = res['data']['tags'];
                return await Promise.all(instanceData.map(async (res): Promise<any> => {
                    for (let key in res) {
                        res[key] = typeof res[key] === 'string' ? res[key].replace(/[\']/g, '_') : res[key];
                    }
                    return await getRepository(Tags).save(res)
                }))
            }).catch((err) => {
                return { status: 422, data: err.message };
            })
        } catch(e){
            return catchError(e.message, "dashboardrepo", "InsertAllTags")
        }
    }
    async InsertTotalNum(){
        try{
        let totalPosts = await getConnection().manager.find(Posts);
        let totalpages = await getConnection().manager.find(Pages);
        let totalTags = await getConnection().manager.find(Tags);
        let totalAuthors = await getConnection().manager.find(Authors);
        return {
            totalPosts: totalPosts.length,
            totalpages: totalpages.length,
            totalTags: totalTags.length,
            totalAuthors: totalAuthors.length
        }
        } catch(e){
            return catchError(e.message, "dashboardrepo", "InsertAllTags")
        }
    }
    async InsertAllPages(){
        try{
            return await axios.get('https://demo.ghost.io/ghost/api/v3/content/pages?key=22444f78447824223cefc48062').then(async (res) => {
                // console.log("res::::",res.data)
                let instanceData: any = res['data']['pages'];
                return await Promise.all(instanceData.map(async (res): Promise<any> => {
                    for (let key in res) {
                        res[key] = typeof res[key] === 'string' ? res[key].replace(/[\']/g, '_') : res[key];
                    }
                    return await getRepository(Pages).save(res)
                }))
            }).catch((err) => {
                return { status: 422, data: err.message };
            })
        } catch(e){
            return catchError(e.message, "dashboardrepo", "InsertAllPosts")
        }
    }
    async InsertAllAuthors(){
        try{
            return await axios.get('https://demo.ghost.io/ghost/api/v3/content/authors?key=22444f78447824223cefc48062').then(async (res) => {
                // console.log("res::::",res.data)
                let instanceData: any = res['data']['authors'];
                return await Promise.all(instanceData.map(async (res): Promise<any> => {
                    for (let key in res) {
                        res[key] = typeof res[key] === 'string' ? res[key].replace(/[\']/g, '_') : res[key];
                    }
                    return await getRepository(Authors).save(res)
                }))
            }).catch((err) => {
                return { status: 422, data: err.message };
            })
        } catch(e){
            return catchError(e.message, "dashboardrepo", "InsertAllAuthors")
        }
    }

    async getLatestposts(num){
        try{
            return await getConnection().manager.query(`SELECT * FROM posts ORDER BY published_at DESC LIMIT ${num}`)
        } catch(e){
            return catchError(e.message, "dashboardrepo", "getLatestposts")
        }
    }

    async getMonthChartposts(){
        try{
            return await getConnection().manager.query(`select SUM(l.reading_time) as reading_time, substring(published_at from 6 for 2) 
            as month,substring(published_at from 1 for 4) as year from posts as l GROUP BY month,year order by year desc`)
        } catch(e){
            return catchError(e.message, "dashboardrepo", "getLatestposts")
        }
    }
}