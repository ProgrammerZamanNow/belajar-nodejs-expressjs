import express from "express";
import request from "supertest";

const app = express();

app.route("/products")
    .get((req, res) => {
        res.send("Get Product");
    })
    .post((req, res) => {
        res.send("Create Product");
    })
    .put((req, res) => {
        res.send("Update Product");
    });

test("Test Route Function", async () => {
    let response = await request(app).get("/products");
    expect(response.text).toBe("Get Product");

    response = await request(app).post("/products");
    expect(response.text).toBe("Create Product");

    response = await request(app).put("/products");
    expect(response.text).toBe("Update Product");
});
