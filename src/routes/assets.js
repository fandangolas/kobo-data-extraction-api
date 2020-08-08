import express from "express";

const assetsRouter = ({ assetsController }) => {
  var router = express.Router();

  router.get('/kobo/assets', assetsController.getAssets);
  router.post('/kobo/assets/:uid', assetsController.registerAsset);

  return router;
};

module.exports = assetsRouter;