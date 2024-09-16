
import express from "express"
import { helloWorld } from "../controllers/helloworld.js";


const router = express.Router();

router.get('/', helloWorld)

export {router};

