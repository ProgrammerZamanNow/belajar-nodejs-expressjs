test("string.not", () => {
    const name = "Eko Kurniawan Khannedy";

    expect(name).not.toBe("Joko");
    expect(name).not.toEqual("Joko");
    expect(name).not.toMatch(/joko/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
