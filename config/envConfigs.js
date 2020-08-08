import dotenv from "dotenv";

dotenv.config();

module.exports = {
  host: process.env.HOST,
  koboUser: process.env.KOBO_USER,
  koboPassword: process.env.KOBO_PASSWORD,
  koboBaseUrl: process.env.KOBO_BASEURL,
  mongoConnectionString: process.env.MONGO_DB_CONNECTIONSTRING,
  port: process.env.PORT
};