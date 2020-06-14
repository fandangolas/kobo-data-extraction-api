import bodyParser from "body-parser";
import express from "express";
import configureContainer from "./app/configureContainer";

const container = configureContainer();

const mongoDb = container.resolve('db');
const assetsRouter = container.resolve('assetsRouter');
const authMiddleware = container.resolve('authMiddleware');

const app = express();

app.use('/', authMiddleware.authenticate);

app.use(bodyParser.json());
app.use(assetsRouter);

mongoDb.configure()
  .then(client => {
    console.log(`Connected to Db: ${client.s.options.dbName}`);
    app.listen(process.env.PORT, process.env.HOST);
  })
  .catch(err => console.log(err));