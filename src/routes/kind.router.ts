import express, { Request, Response } from "express";
const router = express.Router();

router.route("/quotes").get((req: Request, res: Response) => {
	res.json("Hello World! from qoutes");
	res.status(200);
});

export default router;
