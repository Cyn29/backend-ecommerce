import express, { application } from "express";
import cors from "cors";
import db from "./database/db.js";
import productRouter from "./routes/productRouter.js";

export const APP = express();
APP.get("/", (req, res) => {
    res.send("Hola Api");
});

APP.use(cors());
APP.use(express.json());
APP.use("/products", productRouter);

try {
    await db.authenticate();
    console.log("conected to database");
}catch{
    console.log(`error: ${error}`);
}

export const server = APP.listen(8000, () => {
    console.log("🚀 server up in http://localhost:8000/");
});