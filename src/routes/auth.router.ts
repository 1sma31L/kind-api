import express, { Request, Response } from "express";
const router = express.Router();

router.route("/signin").get((req: Request, res: Response) => {
	res.json("Signed In Successfully!");
	res.status(200);
});

export default router;
