import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/auth";
import configureContainer from "./app/configureContainer";
import mongoDb from "./app/database";

dotenv.config();
const container = configureContainer();
const mongoDbClient = mongoDb();

const app = express();

app.use(bodyParser.json());

app.use(router);

mongoDbClient.connect(client => {
  console.log(`Connected to Db: ${client.s.options.dbName}`);

  app.listen(process.env.PORT, process.env.HOST);
});