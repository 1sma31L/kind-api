import express, { Request, Response } from "express";

import authRouter from "./routes/auth.router";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import kindRouter from "./routes/kind.router";
import morgan from "morgan";
import path from "path";
import userRouter from "./routes/kind.router";

// Loading enviorement variables
dotenv.config();

// Initializing the server
const app = express();
const PORT = process.env.PORT || "3000";

// Using Middlewares
app.use(cors());
app.use(express.json());

// Using the Router
app.use("/api/v1/kind", kindRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
	path.join(process.cwd(), "logs", "access.log"),
	{
		flags: "a",
	}
);
// setup the logger
app.use(morgan("common", { stream: accessLogStream }));

// Defining Endpoints and Routes
app.get("/", (req: Request, res: Response) => {
	res.json("Hello World!");
	res.status(200);
});

// Starting the server
app.listen(PORT, () => {
	console.log(`Server is running : http://localhost:${PORT}`);
});

export default app;
