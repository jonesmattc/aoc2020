import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    let validPasswords = 0;

    for (const row of input) {
        const [minstr, maxstr, letter, password] = row.split(/[- :]+/);
        const min = parseInt(minstr, 10);
        const max = parseInt(maxstr, 10);
        let count = 0;
        for (const index in password.split('')) {
            const char = password[index];
            if (char === letter) {
                count += 1;
            }
        }
        if (min <= count && count <= max) {
            validPasswords += 1;
        }

    }

    return validPasswords;
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    let validPasswords2 = 0;

    for (const row of input) {
        const [minstr, maxstr, letter, password] = row.split(/[- :]+/);
        const min = parseInt(minstr, 10);
        const max = parseInt(maxstr, 10);
        let count = 0;
        for (const index in password.split('')) {
            const char = password[index];
            if (char === letter) {
                count += 1;
            }
        }
        const first = password.charAt(min-1);
        const second = password.charAt(max-1);

        if ((first === letter) !== (second === letter)) {
            validPasswords2 += 1;
        }

    }

    return validPasswords2;
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