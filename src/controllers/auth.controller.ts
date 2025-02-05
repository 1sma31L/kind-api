import { Request, Response } from "express";

import AuthModel from "../models/auth.model";

const AuthController = {
	signUp: async (req: Request, res: Response) => {
		const { email, password, name, family_name } = req.body;
		const { data, error } = await AuthModel.signUpNewUser(email, password);
		if (error) {
			res.status(400).json(error);
			return;
		}
		const userId = data?.user?.id ?? "";
		const { InsertError } = await AuthModel.saveNewUser(
			userId,
			email,
			name,
			family_name
		);
		if (InsertError) {
			res.status(400).json({ error: InsertError.message });
			return;
		}
		res.status(200).json(data);
	},
	logIn: async (req: Request, res: Response) => {},
};

export default AuthController;
