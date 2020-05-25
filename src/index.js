import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import configureContainer from "./app/configureContainer";

dotenv.config();
const container = configureContainer();

const mongoDb = container.resolve('db');

const authRouter = container.resolve('authRouter')

const app = express();

app.use(bodyParser.json());

app.use(authRouter);

mongoDb.configure(client => {
  console.log(`Connected to Db: ${client.s.options.dbName}`);

  app.listen(process.env.PORT, process.env.HOST);
});