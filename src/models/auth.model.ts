import { supabase } from "../lib/initSupabase";
const AuthModel = {
	signUpNewUser: async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: "http://localhost:3000/api/v1/auth/verify",
			},
		});
		return { data, error };
	},
	saveNewUser: async (
		userId: string,
		email: string,
		name: string,
		family_name: string
	) => {
		const { error: InsertError } = await supabase
			.from("users")
			.insert([{ id: userId, email, name, family_name }]);
		return { InsertError };
	},
};

export default AuthModel;
