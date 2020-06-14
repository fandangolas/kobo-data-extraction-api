import express from "express";

const assetsRouter = ({ assetsController }) => {
  var router = express.Router();

  router.get('/kobo/assets', assetsController.getAssets);

  return router;
};

module.exports = assetsRouter;