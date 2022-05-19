test("numbers", () => {

    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);

    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    expect(value).toBe(4);

});
