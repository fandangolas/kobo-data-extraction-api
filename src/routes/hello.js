import express from "express";
import helloController from "../controllers/helloController";

var router = express.Router();

router.get('/', helloController.getHello);

module.exports = router;