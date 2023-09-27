import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.3",
        info: { title: "Backend Ecommerce", version: "1.0.0"},
    },
    apis: ["routes/productRouter.js", "routes/categoryRouter.js", "database/db.js"]
}

//Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = (APP, port) => {
    APP.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec) );
    APP.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`📒 Version 1 Api Documentation is available at http://localhost:${port}/api/v1/docs`)

}

export default swaggerDocs;
