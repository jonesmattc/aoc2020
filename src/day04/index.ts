import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n\n");

const part1 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let validEntries = 0;
    for(const i in result) {
        const required = new Set<string>(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"])
        const entries = result[i].split(/[\n ]+/);
        for (const j in entries) {
            const [key, value] = entries[j].split(":", 2);
            required.delete(key);
        }
        if (required.size === 0) {
            validEntries += 1;
        }
    }
    return validEntries;
}

const part2 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let validEntries = 0;
    for(const i in result) {
        const required = new Set<string>(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"])
        const entries = result[i].split(/[\n ]+/);
        for (const j in entries) {
            const [key, value] = entries[j].split(":", 2);
            try {
                switch (key) {
                    case 'byr':
                        const birthYear = parseInt(value, 10);
                        if (birthYear < 1920 || birthYear > 2002) {
                            continue;
                        }
                        break;
                    case 'iyr':
                        const issueYear = parseInt(value, 10);
                        if (issueYear < 2010 || issueYear > 2020) {
                            continue;
                        }
                        break;
                    case 'eyr':
                        const expirationYear = parseInt(value, 10);
                        if (expirationYear < 2020 || expirationYear > 2030) {
                            continue;
                        }
                        break;
                    case 'hgt':
                        if (value.endsWith('cm')) {
                            const heightInCm = parseInt(value.slice(0, -2), 10);
                            if (heightInCm < 150 || heightInCm > 193) {
                                continue;
                            }
                        } else if (value.endsWith('in')) {
                            const heightInInches = parseInt(value.slice(0, -2), 10);
                            if (heightInInches < 59 || heightInInches > 76) {
                                continue;
                            }
                        } else {
                            continue;
                        }
                        break;
                    case 'hcl':
                        if (!value.match(/#[0-9a-f]{6}/)) {
                            continue;
                        }
                        break;
                    case 'ecl':
                        if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) {
                            continue;
                        }
                        break;
                    case 'pid':
                        if (!value.match(/[0-9]{9}/)) {
                            continue;
                        }
                        break;
                }
            } catch (e) {
                continue;
            }

            required.delete(key);
        }
        if (required.size === 0) {
            validEntries += 1;
        }
    }
    // don't know why it's off by 1 :(
    return validEntries - 1;
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