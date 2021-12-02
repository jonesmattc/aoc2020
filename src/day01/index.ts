import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const lookup_table = new Set<number>();

    for (const index in input) {
        const number = parseInt(input[index], 10);
        if (lookup_table.has(2020 - number)) {
            const compliment = 2020 - number;
            return compliment * number;
        } else {
            lookup_table.add(number);
        }
    }
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const lookup_table = new Set<number>();

    for (const index in input) {
        const number = parseInt(input[index], 10);
        if (!lookup_table.has(2020 - number)) {
            lookup_table.add(number);
        }
    }
    const lookup_array = Array.from(lookup_table).sort();
    loop: for (const index in lookup_array) {
        for (const index2 in lookup_array) {
            for (const index3 in lookup_array) {
                if (lookup_array[index] + lookup_array[index2] + lookup_array[index3] === 2020) {
                    return lookup_array[index] * lookup_array[index2] * lookup_array[index3];
                }
            }
        }
    }
}

run({
    part1: {
        tests: [
            // { input: ``, expected: "" },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // { input: ``, expected: "" },
        ],
        solution: part2,
    },
    trimTestInputs: true,
});