import { connectionDB } from "../database.js";
import { Recipe, RecipeEntity } from "../protocols.js";

export async function recipeInsert(recipe: Recipe): Promise<void> {
    const { name, ingredients, directions } = recipe;
    await connectionDB.query(`INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3);`, [name, ingredients, directions]);
}

export async function recipesSelect(): Promise<RecipeEntity[]> {
    const select = await connectionDB.query(`SELECT * FROM recipes;`);
    
    return select.rows as RecipeEntity[];
}
