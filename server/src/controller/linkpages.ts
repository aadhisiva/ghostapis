import "reflect-metadata";
/** 
 * @Author: aadhisivapanjagala@gmail.com
 * @description: Ghost link page apis
 * 
 * */
import express from 'express';
import { LinkPageService }from "../services/linkpageservice";
import responseMesg, { RESPONSEMSG } from '../responsemessages/responseMessages';
import { Container } from "typedi";
import { apiResponses } from "../apiresponse/responseTemplate";

const router = express.Router();

const dashboardservice = Container.get(LinkPageService);

router.get('/get-links',async (req,res)=>{
    const result = await dashboardservice.fetchAllLinks();
    const response = apiResponses(result,res,RESPONSEMSG.INSERT_SUCCESS);
    return res.send(response);
})
export default router;