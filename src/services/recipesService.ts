import { Recipe } from "../protocols.js";
import { recipeDelete, recipeInsert, recipesSelect, recipeUpdate } from "../repositories/recipesRepository.js";

export async function recipesDeleteById(id: number) {
    await recipeDelete(id);
};

export async function recipesCreate(recipe: Recipe) {
    await recipeInsert(recipe);
};

export async function recipesRetrieve() {
    const recipes = await recipesSelect();

    return recipes;
};

export async function recipesUpdateById(recipe: Recipe, id: number) {
    await recipeUpdate(recipe, id);
};
