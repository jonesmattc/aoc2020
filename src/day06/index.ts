import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n\n");

const part1 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let total_count_any = 0
    for(const entry of result) {
        const anySet = new Set<string>();
        const answers = entry.replaceAll("\n", "").split("");
        for (const answer of answers) {
            anySet.add(answer);
        }

        total_count_any += anySet.size;
    }
    return total_count_any;
}

const part2 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let total_count_all = 0;

    for(const entry of result) {
        let allSet = new Set<string>();
        const personalEntry = entry.split("\n");
        for (const answer of personalEntry[0].split("")) {
            allSet.add(answer);
        }
        for (const answers of personalEntry.slice(1)) {
            const answers_list = answers.split("");
            const answersSet = new Set<string>();
            for (const answer of answers_list) {
                answersSet.add(answer);
            }
            allSet = new Set([...Array.from(allSet)].filter(i => answersSet.has(i)));
        }
        total_count_all += allSet.size;
    }
    return total_count_all;
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