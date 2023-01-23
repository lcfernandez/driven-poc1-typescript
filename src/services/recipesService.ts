import { Recipe } from "../protocols.js";
import { recipeDelete, recipeInsert, recipeSelectById, recipeSelectByName, recipesRankingSelect, recipesSelect, recipeUpdate } from "../repositories/recipesRepository.js";

export async function recipesDeleteById(id: string) {
    if (isNaN(Number(id))) {
        return;
    }
    
    const recipeExists = await recipeSelectById(id);

    if (!recipeExists) {
        return;
    }

    const result = await recipeDelete(id);

    return result;
};

export async function recipesCreate(recipe: Recipe) {
    const recipeExists = await recipeSelectByName(recipe.name);

    if (recipeExists) {
        return;
    }

    const result = await recipeInsert(recipe);

    return result;
};

export async function recipesRetrieve() {
    const recipes = await recipesSelect();

    return recipes;
};

export async function recipesRankingRetrieve() {
    const recipes = await recipesRankingSelect();

    return recipes;
};

export async function recipesUpdateById(recipe: Recipe, id: string) {
    if (isNaN(Number(id))) {
        return;
    }
    
    const recipeExists = await recipeSelectById(id);

    if (!recipeExists) {
        return;
    }

    const result = await recipeUpdate(recipe, id);
    return result;
};
