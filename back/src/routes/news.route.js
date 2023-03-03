import { Router } from "express";
const router = Router();

import {create, findAll, topNews} from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";



router.post("/", authMiddleware, create);
router.get("/", authMiddleware, findAll);

router.get("/", topNews)

export default router;