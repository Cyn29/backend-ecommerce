import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Backend Ecommerce", 
            version: "1.0.0", 
        },
        components: {
            schemas: {
                Product: {
                    type: "object",
                    properties: {
                        product_id: {
                            type: "integer",
                            example: 1,
                        },
                        title: {
                            type: "string",
                            example: "Adidas",
                        },
                        product_description: {
                            type: "string",
                            example: "For Running",
                        },
                        price: {
                            type: "integer",
                            example: 100,
                        },
                        category_id: {
                            type: "integer",
                            example: 3,
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time", 
                            example: "2022-04-20T14:21:56Z",
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time",
                            example: "2022-04-20T14:21:56Z",
                        },
                    },
                },
                Category: {
                    type: "object",
                    properties: {
                        category_id: {
                            type: "integer",
                            example: 1,
                        },
                        brand: {
                            type: "string",
                            example: "Adidas",
                        },
                    },
                },
            },
        },
    },
    apis: [
        "./routes/productRouter.js",
        "./routes/categoryRouter.js",
    ], 
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (APP, port) => {
    APP.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    APP.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`📒 Version 1 Api Documentation is available at http://localhost:${port}/api/v1/docs`);
};

export default swaggerDocs;

