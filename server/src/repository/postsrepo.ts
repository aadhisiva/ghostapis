import { Service } from "typedi";
import { getConnection, getRepository } from "typeorm";
import axios from "axios";
import { catchError } from "../apiresponse/responseTemplate";

/*****
 * entitytables : tablenames
 */
 import { Posts } from "../entity/posts";

@Service()
export class PostsRepo {
    async InsertAllPosts() {
        try {
            return axios.get('https://demo.ghost.io/ghost/api/v3/content/posts?key=22444f78447824223cefc48062').then(async (res) => {
                let instanceData: any = res['data']['posts'];
                return await Promise.all(instanceData.map(async (res): Promise<any> => {
                    for (let key in res) {
                        res[key] = typeof res[key] === 'string' ? res[key].replace(/[\']/g, '_') : res[key];
                    }
                    // let queryRes = await getConnection().manager.query(`insert into posts (title,slug,html,comment_id,feature_image,
                    //     featured,visibility,published_at,custom_excerpt,codeinjection_head,codeinjection_foot,custom_template,
                    //     canonical_url,email_recipient_filter,url,excerpt,reading_time,access,send_email_when_published,og_image,og_title,
                    //     og_description,twitter_image,twitter_title,twitter_description,meta_title,meta_description,email_subject,frontmatter,created_at,updated_at,id,uuid) 
                    //     values ('${res.title}','${res.slug}','${res.html}','${res.comment_id}','${res.feature_image}',
                    //     '${res.featured}','${res.visibility}','${res.published_at}','${res.custom_excerpt}',
                    //     '${res.codeinjection_head}','${res.codeinjection_foot}','${res.custom_template}','${res.canonical_url}','${res.email_recipient_filter}',
                    //     '${res.url}','${res.excerpt}','${res.reading_time}','${res.access}','${res.send_email_when_published}','${res.og_image}','${res.og_title}',
                    //     '${res.og_description}','${res.twitter_image}','${res.twitter_title}','${res.twitter_description}','${res.meta_title}',
                    //     '${res.meta_description}','${res.email_subject}','${res.frontmatter}','${res.created_at}','${res.updated_at}','${res.id}','${res.uuid}') RETURNING id,uuid;--`)
                    // console.log("pagerepo:::::PageRepo:::::info",JSON.stringify(queryRes))
                    return await getRepository(Posts).save(res)
                }))
            }).catch((err) => {
                return { status: 422, data: err.message };
            })
        } catch (e) {
            return catchError(e.message, "pagerepo", "InsertAllPosts")
        }
    }

    async FetchWithOutMeta() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
             resData.filter((res) => {
                if ((res.meta_description) === null) {
                    result.push(res);
                } else {
                    return { status: 422, data: {} };
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchWithOutMeta")
        }
    }
    async FetchWithMeta() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
             resData.filter((res) => {
                if (!(res.meta_description == null)) {
                    result.push(res);
                } else {
                    return { status: 422, data: {} };
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchWithMeta")
        }
    }
    async FetchUrlPosts() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
             resData.filter((res) => {
                if ((res.url).length > 100) {
                    result.push(res);
                } else {
                    return { status: 422, data: {}};
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchUrlPosts")
        }
    }
    async FetchWithOutImage() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
             resData.filter((res) => {
                if (!(res.feature_image)) {
                    result.push(res.feature_image);
                } else {
                    return { status: 422, data: {} };
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchWithOutImage")
        }
    }
    async FetchShortPosts() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
            resData.filter(res=> {
                if((JSON.stringify(Object.values(res)).match(/(\w+)/g).length) < 250){
                    result.push(res);
                } else {
                    return { status: 422, data: {} };
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchShortPosts")
        }
    }
    async FetchLongPosts() {
        try {
            let result = [];
            let resData = await getConnection().manager.find(Posts);
            resData.filter(res=> {
                if((JSON.stringify(Object.values(res)).match(/(\w+)/g).length) > 1500){
                    result.push(res);
                } else {
                    return { status: 422, data: {} };
                }
            })
            return result;
        } catch (e) {
            return catchError(e.message, "pagerepo", "FetchLongPosts")
        }
    }

}