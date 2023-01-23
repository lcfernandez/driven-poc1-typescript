export type RecipeEntity = {
    id: number,
    name: string,
	ingredients: string,
	directions: string,
	done_at?: Date,
	rating?: number
};

export type Recipe = Omit<RecipeEntity, "id">;
