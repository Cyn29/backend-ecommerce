import request from "supertest";
import { APP, server } from "../app.js";
import db from "../database/db.js";
import CategoryModel from "../models/categoryModel.js";

describe("Test CRUD categories table", () => {
    describe("GET /categories", () => {
        let response;
        beforeEach(async () => {
            response = await request(APP).get("/categories").send();
        });
        test("should return a response with status 200 and type json", async () => {
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toContain("json");
        });
        test("should return all products", async () => {
            expect(response.body).toBeInstanceOf(Array);
        })
    });
    describe("POST /categories", () => {
        const newCategory = {
            brand: "test",
        };
        const wrongCategory = {
            wrong_field: 0,
        }
        test("should return a response with status 200 and type json", async () => {
            const response = await request(APP).post("/categories").send(newCategory);
            expect(response.body.message).toContain("Category created successfully!")
        });
        test("should return a message insertion error if post a wrong product", async () => {
            const response = await request(APP).post("/categories").send(wrongCategory);
            expect(response.body.message).toContain( "Field 'brand' doesn't have a default value")
        });
        afterAll(async () => {
            await CategoryModel.destroy({where: {category_id: 0}})
        })
    });
        afterAll(async () => {
            server.close();
            db.close();
        });
});