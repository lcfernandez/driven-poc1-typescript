export type RecipeEntity = {
    id: number,
    name: string,
	ingredients: string,
	directions: string,
	rating?: number
};

export type Recipe = Omit<RecipeEntity, "id">;
