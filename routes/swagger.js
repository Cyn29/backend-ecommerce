import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const getProducts = {
    tags: ["products"],
    summary: "Get all products",
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product",
                    },
                },
            },
        },
        404: {
            description: "Products not found",
        },
    },
};

const getProductById = {
    tags: ["products"],
    summary: "Get product by ID",
    parameters: [
        {
            in: "path",
            name: "product_id",
            required: true,
            description: "Product ID",
            schema: {
                type: "integer",
            },
        },
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product",
                    },
                },
            },
        },
        404: {
            description: "Product not found",
        },
    },
};

const getCategories = {
    tags: ["categories"],
    summary: "Get all categories",
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Category",
                    },
                },
            },
        },
        404: {
            description: "Categories not found",
        },
    },
};

const getCategoryById = {
    tags: ["categories"],
    summary: "Get products by category",
    parameters: [
        {
            in: "path",
            name: "category_id",
            required: true,
            description: "Category ID",
            schema: {
                type: "integer",
            },
        },
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product",
                    },
                },
            },
        },
        404: {
            description: "Category not found",
        },
    },
};

const postProduct = {
    tags: ["products"],
    summary: "Create a new product",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Product",
                },
            },
        },
    },
    responses: {
        201: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product",
                    },
                },
            },
        },
    },
};

const postCategory = {
    tags: ["categories"],
    summary: "Create a new category",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Category",
                },
            },
        },
    },
    responses: {
        201: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Category",
                    },
                },
            },
        },
    },
};

const putProduct = {
    tags: ["products"],
    summary: "Update a product by ID",
    parameters: [
        {
            in: "path",
            name: "product_id",
            required: true,
            description: "Product ID",
            schema: {
                type: "integer",
            },
        },
    ],
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Product",
                },
            },
        },
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Product",
                    },
                },
            },
        },
        400: {
            description: "Bad request",
        },
        404: {
            description: "Product not found",
        },
    },
};

const putCategory = {
    tags: ["categories"],
    summary: "Update a category by ID",
    parameters: [
        {
            in: "path",
            name: "category_id",
            required: true,
            description: "Category ID",
            schema: {
                type: "integer",
            },
        },
    ],
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/Category",
                },
            },
        },
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Category",
                    },
                },
            },
        },
        400: {
            description: "Bad request",
        },
        404: {
            description: "Category not found",
        },
    },
};

const deleteProduct = {
    tags: ["products"],
    summary: "Delete a product by ID",
    parameters: [
        {
            in: "path",
            name: "product_id",
            required: true,
            description: "Product ID",
            schema: {
                type: "integer",
            },
        },
    ],
    responses: {
        200: {
            description: "OK",
        },
        404: {
            description: "Product not found",
        },
    },
};

const deleteCategory = {
    tags: ["categories"],
    summary: "Delete a category by ID",
    parameters: [
        {
            in: "path",
            name: "category_id",
            required: true,
            description: "Category ID",
            schema: {
                type: "integer",
            },
        },
    ],
    responses: {
        200: {
            description: "OK",
        },
        404: {
            description: "Category not found",
        },
    },
};

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
    operations: [getProducts, getProductById, getCategories, getCategoryById, postProduct, postCategory, putProduct, putCategory, deleteProduct, deleteCategory], 
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

