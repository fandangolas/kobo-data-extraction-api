import authController from "../controllers/authController";
import authRouter from "../routes/auth";
import { createContainer, asValue, asFunction } from "awilix";
import koboClient from "../infrastructure/koboClient";
import mongoDb from "./database";

const configureContainer = () => {
  const container = createContainer();

  container
  //Register MongoDB
  .register({
    mongoConnectionString: asValue(process.env.MONGO_DB_CONNECTIONSTRING),
    db: asFunction(mongoDb)
  })
  //Register Kobo-API client 
  .register({
    koboUser: asValue(process.env.KOBO_USER),
    koboPassword: asValue(process.env.KOBO_PASSWORD),
    koboBaseUrl: asValue(process.env.KOBO_BASEURL),
    koboClient: asFunction(koboClient).singleton()
  })
  //Register Controllers
  .register({
    authController: asFunction(authController)
  })
  .register({
    authRouter: asFunction(authRouter)
  });
  
  return container;
};

export default configureContainer;