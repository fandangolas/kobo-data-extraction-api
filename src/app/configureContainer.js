import { createContainer, asValue, asFunction } from "awilix";

import envConfigs from "../../config/envConfigs";
import app from ".";
import mongoDb from "../database";
import server from "../server";

import assetsController from "../controllers/assetsController";
import authMiddleware from "../middlewares/authMiddleware";
import assetsRouter from "../routes/assets";

import koboClient from "../infrastructure/koboClient";


const configureContainer = () => {
  const container = createContainer();

  container
    //Register environment variables
    .register({
      config: asValue(envConfigs)
    })
    //Register application initialize configuration
    .register({
      app: asFunction(app).singleton(),
      server: asFunction(server).singleton()
    })
    //Register MongoDB connection
    .register({
      db: asFunction(mongoDb).singleton()
    })
    //Register Kobo-API client 
    .register({
      koboClient: asFunction(koboClient).singleton()
    })
    //Register Middlewares
    .register({
      authMiddleware: asFunction(authMiddleware)
    })
    //Register Controllers
    .register({
      assetsController: asFunction(assetsController)
    })
    //Register Routes
    .register({
      assetsRouter: asFunction(assetsRouter)
    });

  return container;
};

export default configureContainer;