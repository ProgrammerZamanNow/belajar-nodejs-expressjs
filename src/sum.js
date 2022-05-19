export const sum = (first, second) => {
    return first + second;
}

export const sumAll = (numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

export const calculate = (numbers, callback) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    callback(total);
}

export const calculateAndReturn = (numbers, callback) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return callback(total);
}
