import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    });
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    });
});

test("Test Request JSON", async () => {
    const response = await request(app)
        .post("/json")
        .set("Content-Type", "application/json")
        .send({name: "World"});

    expect(response.body).toEqual({
        hello: `Hello World`
    });
});

test("Test Request Form", async () => {
    const response = await request(app)
        .post("/form")
        .set("Content-Type", "application/x-www-form-urlencoded")
        .send("name=World");

    expect(response.body).toEqual({
        hello: `Hello World`
    });
});
