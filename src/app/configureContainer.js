import assetsController from "../controllers/assetsController";
import authMiddleware from "../middlewares/authMiddleware";
import assetsRouter from "../routes/assets";
import { createContainer, asValue, asFunction } from "awilix";
import koboClient from "../infrastructure/koboClient";
import mongoDb from "./database";
import envConfigs from "../../config/envConfigs";

const configureContainer = () => {
  const container = createContainer();

  container
    //Register environment variables
    .register({
      config: asValue(envConfigs)
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