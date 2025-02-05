import AuthController from "../controllers/auth.controller";
import express from "express";

const router = express.Router();

router.route("/signup").post();
router.route("/login").post();

export default router;
