import express from "express";

const authRouter = ({ authController }) => {
  var router = express.Router();

  router.get('/', authController.getAuthToken);

  return router;
};

module.exports = authRouter;