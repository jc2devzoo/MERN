import express from "express";

const router = express.Router();
import userController from "../controllers/user.controller.js";

router.post("/",userController.create);
router.get("/",userController.findAll);
router.get("/:id", userController.findById);
router.patch("/:id", userController.update)

export default  router;