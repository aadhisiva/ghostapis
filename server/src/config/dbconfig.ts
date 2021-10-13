import "reflect-metadata";
import {createConnection} from "typeorm";
import {Service} from "typedi"
import {Posts} from "../entity/posts";
import { Tags } from "../entity/tags";
import { Pages } from "../entity/pages";
import { Authors } from "../entity/authors";
// import dotenv from "dotenv";
// dotenv.config()

@Service()
export class DataBaseConfig{
    async connection(){
        // console.log("process:::::",process.env.DB_HOST)
        return await createConnection({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            database: process.env.DB_DATABASE, 
            password: process.env.DB_PASSWORD, 
            entities:[Posts,Tags,Pages,Authors],

            synchronize: true,
            logging: false       
         });
    }
}
