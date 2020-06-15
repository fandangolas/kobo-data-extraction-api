import bodyParser from "body-parser";
import express from 'express';

module.exports = ({ assetsRouter, authMiddleware, config }) => {
  const app = express();

  app.use(bodyParser.json());
  app.use('/kobo', authMiddleware.authenticate);
  app.use(assetsRouter);

  return {
    start: () => new Promise(_ => {
      app.listen(config.port, config.host, () =>
        console.log(`Application running on port ${config.port}`))
    })
  }
}