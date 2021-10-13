import "reflect-metadata";
import { Container, Service, Inject } from 'typedi';
/** 
 * @Author: aadhisivapanjagala@gmail.com
 * @description: ghost post apis
 * 
 * */
import express from 'express';
import { PostsService }from "../services/postsservices";
import responseMesg, { RESPONSEMSG } from '../responsemessages/responseMessages';
import { apiResponses } from "../apiresponse/responseTemplate";

const router = express.Router();

const postsservice = Container.get(PostsService);
router.post('/all-posts',async (req,res)=>{
    const result = await postsservice.InsertAllPosts();
    const response = apiResponses(result,res,RESPONSEMSG.INSERT_SUCCESS);
    return res.send(response);
})

router.get('/get-without-meta', async (req,res) =>{
    const result = await postsservice.FetchWithOutMeta();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/get-with-meta', async (req,res) =>{
    const result = await postsservice.FetchWithMeta();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/url', async (req,res) =>{
    const result = await postsservice.FetchUrlPosts();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/without-image', async (req,res) =>{
    const result = await postsservice.FetchWithOutImage();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/short-posts', async (req,res) =>{
    const result = await postsservice.FetchShortPosts();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
router.get('/long-posts', async (req,res) =>{
    const result = await postsservice.FetchLongPosts();
    const response = apiResponses(result,res,RESPONSEMSG.RETRIVE_SUCCESS);
    return res.send(response);
})
export default router;