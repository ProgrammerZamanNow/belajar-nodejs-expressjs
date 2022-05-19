import {getBalance} from "../src/async.js";

test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);

    await expect(getBalance("Eko", from)).resolves.toEqual({
        name: "Eko",
        balance: 1000
    })

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Eko", from);
});

test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Eko", from)).rejects.toBe("Rejected");
});
