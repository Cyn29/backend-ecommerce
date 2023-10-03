import express from "express";
import cors from "cors";
import db from "./database/db.js";
import productRouter from "./routes/productRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import swaggerDocs from "./routes/swagger.js";

export const APP = express();
APP.get("/", (req, res) => {
    res.send("Hola Api");
});

APP.use(cors());
APP.use(express.json());
APP.use("/products", productRouter);
APP.use("/categories", categoryRouter);

export const server = APP.listen(8000, () => {
    console.log("🚀 server up in http://localhost:8000/");
    swaggerDocs(APP, 8000);
});