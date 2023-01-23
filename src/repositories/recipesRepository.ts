import { QueryResult, QueryResultRow } from "pg";
import { connectionDB } from "../database.js";
import { Recipe, RecipeEntity } from "../protocols.js";

export async function ratingRecipeUpdate(rating: number, id: string): Promise<number> {
    const result = await connectionDB.query(`UPDATE recipes SET rating = $1 WHERE id = $2;`, [rating, id]) as QueryResultRow;

    return result.rowCount;
}

export async function recipeDelete(id: string): Promise<number> {
    const result = await connectionDB.query(`DELETE FROM recipes WHERE id = $1;`, [id]) as QueryResultRow;

    return result.rowCount;
}

export async function recipeInsert(recipe: Recipe): Promise<number> {
    const { name, ingredients, directions } = recipe;
    const result = await connectionDB.query(`INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3);`, [name, ingredients, directions]) as QueryResultRow;
    
    return result.rowCount;
}

export async function recipeSelectById(id: string): Promise<number> {
    const result = await connectionDB.query(`SELECT * FROM recipes WHERE id = $1;`, [id]) as QueryResultRow;
    
    return result.rowCount;
}

export async function recipeSelectByName(name: string): Promise<RecipeEntity> {
    const result = await connectionDB.query(`SELECT * FROM recipes WHERE name ILIKE $1;`, [name]) as QueryResultRow;
    
    return result.rowCount;
}

export async function recipesSelect(): Promise<RecipeEntity[]> {
    const { rows } = await connectionDB.query(`SELECT * FROM recipes;`) as QueryResult<RecipeEntity>;
    
    return rows;
}

export async function recipesRankingSelect(): Promise<RecipeEntity[]> {
    const { rows } = await connectionDB.query(`SELECT * FROM recipes WHERE rating > 0 ORDER BY rating DESC;`) as QueryResult<RecipeEntity>;
    
    return rows;
}

export async function recipeUpdate(recipe: Recipe, id: string): Promise<number> {
    const { name, ingredients, directions } = recipe;
    const result = await connectionDB.query(
        `UPDATE recipes SET name = $1, ingredients = $2, directions = $3 WHERE id = $4;`,
        [name, ingredients, directions, id]
    ) as QueryResultRow;

    return result.rowCount;
}
