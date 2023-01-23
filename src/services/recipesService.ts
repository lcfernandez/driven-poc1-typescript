import { Recipe } from "../protocols.js";
import { recipeInsert, recipesSelect } from "../repositories/recipesRepository.js";

export async function recipeCreate(recipe: Recipe) {
    await recipeInsert(recipe);
};

export async function recipesRetrieve() {
    const recipes = await recipesSelect();

    return recipes;
};
