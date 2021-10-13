import "reflect-metadata";
/** 
 * @Author: aadhisivapanjagala@gmail.com
 * @description: ghost dashboard api 
 * 
 * */
import express from 'express';
import { DashBoardService }from "../services/dashboardservice";
import responseMesg, {  RESPONSEMSG } from '../responsemessages/responseMessages';
import { Container } from "typedi";
import { apiResponses } from "../apiresponse/responseTemplate";

const router = express.Router();

const dashboardservice = Container.get(DashBoardService);
router.post('/all-tags',async (req,res)=>{
    const result = await dashboardservice.InsertAllTags();
    const response = apiResponses(result,res,RESPONSEMSG.INSERT_SUCCESS);
    return res.send(response);
})
router.get('/total-num',async (req,res)=>{
    const result = await dashboardservice.InsertTotalNum();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.post('/all-pages',async (req,res)=>{
    const result = await dashboardservice.InsertAllPages();
    const response = apiResponses(result,res,RESPONSEMSG.INSERT_SUCCESS);
    return res.send(response);
})
router.post('/all-authors',async (req,res)=>{
    const result = await dashboardservice.InsertAllAuthors();
    const response = apiResponses(result,res,RESPONSEMSG.INSERT_SUCCESS);
    return res.send(response);
})
router.get('/latest-posts/:num',async (req,res)=>{
    let num = req.params['num'];
    const result = await dashboardservice.getLatestposts(num);
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/month-wise-posts',async (req,res)=>{
    const result = await dashboardservice.getMonthChartposts();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
export default router;