import express from 'express';
import chalk from 'chalk';
import dotenv from "dotenv"
import morgan from 'morgan';
import Logger from './config/winstonlogger';
import fs from "fs";
import cors from "cors";
import dashboard from "./controller/dashboard";
import posts from "./controller/postscontroller";
import linkpage from "./controller/linkpages"
dotenv.config();
import { DataBaseConfig } from "./config/dbconfig";
import { Container } from "typedi";
const dbconnection = Container.get(DataBaseConfig);

const PORT = 8008;
const app = express();

app.use(morgan('common', {
  stream: fs.createWriteStream('./logs/application.log', { flags: 'a' })
}));
app.use(morgan('dev'));
app.use(cors());

app.use('/dashboard', dashboard);
app.use('/posts', posts);
app.use('/links', linkpage);

app.listen(PORT, async () => {
  const connection = dbconnection.connection();
  if (connection instanceof Error) {
    Logger.error(connection);
    throw new Error(JSON.stringify(connection))
  } else {
    Logger.info("[Database]: Database Connected...");
  }
  Logger.debug(chalk.yellow(`server is running at ${PORT}`));
})