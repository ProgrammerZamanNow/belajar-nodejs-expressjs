test("array simple", () => {
    const names = ["eko", "kurniawan", "khannedy"];
    expect(names).toEqual(["eko", "kurniawan", "khannedy"]);
    expect(names).toContain("eko");
});

test("array object", () => {
    const persons = [
        {
            name: "Eko"
        },
        {
            name: "Budi"
        }
    ];
    expect(persons).toContainEqual({
        name: "Eko"
    });
});
