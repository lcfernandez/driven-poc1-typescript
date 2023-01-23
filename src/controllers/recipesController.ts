import { recipeCreate } from "../services/recipesService.js";

import { Request, Response } from "express";

export async function recipesPost(req: Request, res: Response) {
    try {
        await recipeCreate(req.body);

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
