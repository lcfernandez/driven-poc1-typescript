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

export async function recipeUpdate(recipe: Recipe, id: number): Promise<void> {
    const { name, ingredients, directions, done_at, rating } = recipe;
    await connectionDB.query(
        `UPDATE recipes SET name = $1, ingredients = $2, directions = $3, done_at = $4, rating = $5 WHERE id = $6;`,
        [name, ingredients, directions, done_at, rating, id]
    );
}
