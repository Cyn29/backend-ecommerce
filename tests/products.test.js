import request from "supertest";
import { APP, server } from "../app.js";
import db from "../database/db.js";
import ProductModel from "../models/productModel.js";

describe("Test CRUD products table", () => {
    describe("GET /products", () => {
        let response;
        beforeEach(async () => {
            response = await request(APP).get("/products").send();
        });
        test("should return a response with status 200 and type json", async () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
        test("should return all products", async () => {
            expect(response.body).toBeInstanceOf(Array);
        })
    });
    describe("POST /products", () => {
        const newProduct = {
            title: "test",
            product_description: "test",
            price: 100,
            category_id: 1,
        };
        const wrongProduct = {
            wrong_field: "test",
        }
        test("should return a message insertion error if post a wrong product", async () => {
            const response = await request(APP).post("/products").send(wrongProduct);
            expect(response.body.message).toContain( "Field 'title' doesn't have a default value")
        });
        afterAll(async () => {
            await ProductModel.destroy({where: {title: "test"}})
        })
    });
        afterAll(async () => {
            server.close();
            db.close();
        });
});