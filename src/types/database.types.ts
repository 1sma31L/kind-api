export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			comments: {
				Row: {
					content: string;
					created_at: string | null;
					id: string;
					kind_act_id: string | null;
					user_id: string | null;
				};
				Insert: {
					content: string;
					created_at?: string | null;
					id?: string;
					kind_act_id?: string | null;
					user_id?: string | null;
				};
				Update: {
					content?: string;
					created_at?: string | null;
					id?: string;
					kind_act_id?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "comments_kind_act_id_fkey";
						columns: ["kind_act_id"];
						isOneToOne: false;
						referencedRelation: "kind_acts";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "comments_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			kind_acts: {
				Row: {
					comments: string[] | null;
					created_at: string | null;
					description: string;
					gratitude: number | null;
					id: string;
					inspiring: number | null;
					title: string;
					upvote: number | null;
					user_id: string | null;
				};
				Insert: {
					comments?: string[] | null;
					created_at?: string | null;
					description: string;
					gratitude?: number | null;
					id?: string;
					inspiring?: number | null;
					title: string;
					upvote?: number | null;
					user_id?: string | null;
				};
				Update: {
					comments?: string[] | null;
					created_at?: string | null;
					description?: string;
					gratitude?: number | null;
					id?: string;
					inspiring?: number | null;
					title?: string;
					upvote?: number | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "kind_acts_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			ratings: {
				Row: {
					created_at: string | null;
					gratitude: boolean | null;
					id: string;
					inspiring: boolean | null;
					kind_act_id: string | null;
					upvote: boolean | null;
					user_id: string | null;
				};
				Insert: {
					created_at?: string | null;
					gratitude?: boolean | null;
					id?: string;
					inspiring?: boolean | null;
					kind_act_id?: string | null;
					upvote?: boolean | null;
					user_id?: string | null;
				};
				Update: {
					created_at?: string | null;
					gratitude?: boolean | null;
					id?: string;
					inspiring?: boolean | null;
					kind_act_id?: string | null;
					upvote?: boolean | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "ratings_kind_act_id_fkey";
						columns: ["kind_act_id"];
						isOneToOne: false;
						referencedRelation: "kind_acts";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "ratings_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			user_stats: {
				Row: {
					created_at: string | null;
					id: string;
					kindness_score: number | null;
					total_acts: number | null;
					total_comments: number | null;
					total_gratitudes: number | null;
					total_inspirings: number | null;
					total_upvotes: number | null;
					updated_at: string | null;
					user_id: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: string;
					kindness_score?: number | null;
					total_acts?: number | null;
					total_comments?: number | null;
					total_gratitudes?: number | null;
					total_inspirings?: number | null;
					total_upvotes?: number | null;
					updated_at?: string | null;
					user_id?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					kindness_score?: number | null;
					total_acts?: number | null;
					total_comments?: number | null;
					total_gratitudes?: number | null;
					total_inspirings?: number | null;
					total_upvotes?: number | null;
					updated_at?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "user_stats_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			users: {
				Row: {
					bio: string | null;
					comments: string[] | null;
					created_at: string | null;
					email: string;
					family_name: string;
					id: string;
					kind_acts: string[] | null;
					name: string;
					password: string;
					profile_picture: string | null;
				};
				Insert: {
					bio?: string | null;
					comments?: string[] | null;
					created_at?: string | null;
					email: string;
					family_name: string;
					id?: string;
					kind_acts?: string[] | null;
					name: string;
					password: string;
					profile_picture?: string | null;
				};
				Update: {
					bio?: string | null;
					comments?: string[] | null;
					created_at?: string | null;
					email?: string;
					family_name?: string;
					id?: string;
					kind_acts?: string[] | null;
					name?: string;
					password?: string;
					profile_picture?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof PublicSchema["CompositeTypes"]
		| { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
		? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;
