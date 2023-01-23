import Joi from "joi";

export const recipesSchema = Joi.object(
    {
        name: Joi.string().min(1).required(),
        ingredients: Joi.string().min(1).required(),
        directions: Joi.string().min(1).required()
    }
);

export const ratingSchema = Joi.object(
    {
        rating: Joi.number().integer().strict().min(0).max(10).required()
    }
);
