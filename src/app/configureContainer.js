import { createContainer, asValue, asFunction } from "awilix";

import envConfigs from "../../config/envConfigs";
import app from ".";
import server from "../server";

import mongoDb from "../database";
import assetsRepository from "../infrastructure/repositories/assetsRepository";
import assetsDataRepository from "../infrastructure/repositories/assetsDataRepository";

import assetsController from "../controllers/assetsController";
import authMiddleware from "../middlewares/authMiddleware";
import assetsRouter from "../routes/assets";

import koboClient from "../infrastructure/clients/koboClient";


const configureContainer = () => {
  const container = createContainer();

  container
    //Register environment variables
    .register({
      config: asValue(envConfigs),
    })
    //Register application initialize configuration
    .register({
      app: asFunction(app).singleton(),
      server: asFunction(server).singleton(),
    })
    //Register MongoDB and it's repositories
    .register({
      db: asFunction(mongoDb).singleton(),
      assetsRepository: asFunction(assetsRepository),
      assetsDataRepository: asFunction(assetsDataRepository),
    })
    //Register Kobo-API client 
    .register({
      koboClient: asFunction(koboClient).singleton(),
    })
    //Register Middlewares
    .register({
      authMiddleware: asFunction(authMiddleware),
    })
    //Register Controllers
    .register({
      assetsController: asFunction(assetsController),
    })
    //Register Routes
    .register({
      assetsRouter: asFunction(assetsRouter),
    });

  return container;
};

export default configureContainer;