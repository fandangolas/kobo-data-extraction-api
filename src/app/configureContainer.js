import { createContainer, asValue, asFunction } from "awilix";
import dotenv from "dotenv";
import koboClient from "../infrastructure/koboClient";
import authController from "../controllers/authController";

dotenv.config();

const configureContainer = () => {
  const container = createContainer();

  container.register({
    koboUser: asValue(process.env.KOBO_USER),
    koboPassword: asValue(process.env.KOBO_PASSWORD),
    koboBaseUrl: asValue(process.env.KOBO_BASEURL),
    koboClient: asFunction(koboClient).singleton()
  });
  
  return container;
};

export default configureContainer;