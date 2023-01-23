import Joi from "joi";

export const recipesSchema = Joi.object(
    {
        name: Joi.string().required(),
        ingredients: Joi.string().required(),
        directions: Joi.string().required(),
        done_at: Joi.date().iso(),
        rating: Joi.number().integer().strict().min(0).max(10)
    }
);
