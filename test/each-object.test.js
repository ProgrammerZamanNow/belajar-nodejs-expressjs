import {sumAll} from "../src/sum.js";

const table = [
    {
        numbers: [],
        expected: 0
    },
    {
        numbers: [10],
        expected: 10
    },
    {
        numbers: [10, 10, 10],
        expected: 30
    },
    {
        numbers: [10, 10, 10, 10, 10],
        expected: 50
    },
    {
        numbers: [10, 10, 10, 10, 10, 10, 10],
        expected: 70
    },
];

test.each(table)("test sumAll($numbers) should result $expected", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
})
