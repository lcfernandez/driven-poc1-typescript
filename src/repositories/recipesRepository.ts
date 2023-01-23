import { QueryResult } from "pg";
import { connectionDB } from "../database.js";
import { Recipe, RecipeEntity } from "../protocols.js";

export async function recipeInsert(recipe: Recipe): Promise<QueryResult> {
    const { name, ingredients, directions } = recipe;
    const insert = await connectionDB.query(`INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3);`, [name, ingredients, directions]);

    return insert;
}

// export async function recipeSelectByName(name: string): Promise<QueryResult<RecipeEntity>> {
//     return await connectionDB.query(`SELECT FROM recipes WHERE name ILIKE $1;`, [name]);
// }
