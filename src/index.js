import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/auth";
import configureContainer from "./app/configureContainer";

const container = configureContainer();

const app = express();

// mongoose
//   .connect('mongodb://db:27017/crud-node-mongo-docker', {
//     useNewUrlParser: true
//   })
//   .then(result => {
//     console.log('MongoDB Conectado');
//   })
//   .catch(error => {
//     console.log(error);
//   });


app.use(bodyParser.json());

app.use(router);

app.listen(process.env.PORT, process.env.HOST);