import express from "express";
import authController from "../controllers/authController";

var router = express.Router();

router.get('/', authController.getAuthToken);

module.exports = router;