import express from "express";
import recipesRouter from "./routers/recipesRouter.js";

// instance of express
const app = express();

// configs
app.use(express.json());
app.use(recipesRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
