import { recipesDelete, recipesGet, recipesPost, recipesPut, recipesRankingGet } from "../controllers/recipesController.js";
import { recipesSchema } from "../schemas/recipesSchema.js";

import { Router } from "express";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = Router();

router.delete("/recipes/:id", recipesDelete);
router.get("/recipes", recipesGet);
router.get("/recipes/ranking", recipesRankingGet);
router.post("/recipes", validateBody(recipesSchema), recipesPost);
router.put("/recipes/:id", validateBody(recipesSchema), recipesPut);

export default router;
