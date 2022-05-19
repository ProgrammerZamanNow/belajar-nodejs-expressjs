import {sum} from "../src/sum.js";

beforeAll(async () => {
    console.info("Before All");
});

afterAll(async () => {
    console.info("After All");
});

beforeEach(async () => {
    console.info("Before Each");
});

afterEach(async () => {
    console.info("After Each");
});

test("first test", async () => {
    expect(sum(10, 10)).toBe(20);
    console.info("First Test");
})

test("second test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("Second Test");
})
