import AuthController from "../controllers/auth.controller";
import express from "express";

const router = express.Router();

router.route("/signup").post(AuthController.signUp);
router.route("/login").post(AuthController.logIn);

export default router;
