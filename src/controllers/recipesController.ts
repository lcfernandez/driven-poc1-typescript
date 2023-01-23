import { recipesCreate, recipesDeleteById, recipesRankingRetrieve, recipesRetrieve, recipesUpdateById } from "../services/recipesService.js";

import { Request, Response } from "express";

export async function recipesDelete(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const result = await recipesDeleteById(id);

        if (!result) {
            return res.sendStatus(404);
        }

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
        const result = await recipesCreate(req.body);

        if (result) {
            return res.sendStatus(201);
        }

        res.sendStatus(409);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function recipesPut(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const result = await recipesUpdateById(req.body, id);

        if (result) {
            return res.sendStatus(200);
        }

        res.sendStatus(404);
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
