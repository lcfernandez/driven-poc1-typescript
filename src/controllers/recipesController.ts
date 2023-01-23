import { recipesCreate, recipesDeleteById, recipesRankingRetrieve, recipesRetrieve, recipesUpdateById } from "../services/recipesService.js";

import { Request, Response } from "express";

export async function recipesDelete(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await recipesDeleteById(Number(id));

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

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
        await recipesUpdateById(req.body, Number(id));

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function recipesRankingGet(req: Request, res: Response) {
    try {
        const recipes = await recipesRankingRetrieve();

        res.send(recipes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
