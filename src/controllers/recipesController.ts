import { recipesCreate, recipesRetrieve, recipesUpdate } from "../services/recipesService.js";

import { Request, Response } from "express";

export async function recipesGet(req: Request, res: Response) {
    try {
        const recipes = await recipesRetrieve();

        res.send(recipes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function recipesPost(req: Request, res: Response) {
    try {
        await recipesCreate(req.body);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function recipesPut(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await recipesUpdate(req.body, Number(id));

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
