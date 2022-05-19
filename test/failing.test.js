import {sayHello} from "../src/sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Eko")).toBe("Hello Eko");
});

test.failing("sayHello error", () => {
    sayHello(null);
});

test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow();
});
