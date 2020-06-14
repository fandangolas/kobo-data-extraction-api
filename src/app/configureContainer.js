import authController from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";
import authRouter from "../routes/auth";
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
      authController: asFunction(authController)
    })
    //Register Routes
    .register({
      authRouter: asFunction(authRouter)
    });

  return container;
};

export default configureContainer;