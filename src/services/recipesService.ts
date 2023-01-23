import { response, Response } from "express";
import { Recipe, RecipeEntity } from "../protocols.js";
import { recipeDelete, recipeInsert, recipeSelectByName, recipesRankingSelect, recipesSelect, recipeUpdate } from "../repositories/recipesRepository.js";

export async function recipesDeleteById(id: number) {
    await recipeDelete(id);
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

export async function recipesUpdateById(recipe: Recipe, id: number) {
    await recipeUpdate(recipe, id);
};
