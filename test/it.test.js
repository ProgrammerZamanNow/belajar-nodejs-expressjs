import {sumAll} from "../src/sum.js";

describe("when call sumAll()", () => {
    it("should get 30 with parameter [10, 10, 10]", () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });
    it("should get 50 with parameter [10, 10, 10, 10, 10]", () => {
        expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
    });
});
