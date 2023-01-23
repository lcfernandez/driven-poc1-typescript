import { recipesGet, recipesPost, recipesPut } from "../controllers/recipesController.js";
import { recipesSchema } from "../schemas/recipesSchema.js";

import { Router } from "express";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = Router();

router.get("/recipes", recipesGet);
router.post("/recipes", validateBody(recipesSchema), recipesPost);
router.put("/recipes/:id", validateBody(recipesSchema), recipesPut);

export default router;
