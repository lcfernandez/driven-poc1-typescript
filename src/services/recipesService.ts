import { Recipe } from "../protocols.js";
import { recipeInsert } from "../repositories/recipesRepository.js";

export async function recipeCreate(recipe: Recipe) {
    await recipeInsert(recipe);
};
