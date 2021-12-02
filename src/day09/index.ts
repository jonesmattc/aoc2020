import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n").map(r=>Number(r));

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const options = input.slice(0, 25);
    for (const candidate of input.slice(25)) {
        let solved = false;
        for(const option of options) {
            if (options.includes(candidate - option)) {
                solved = true;
                break;
            }
        }
        if (!solved) {
            return candidate;
        } else {
            options.shift();
            options.push(candidate);
        }
    }
}


function getContiguousSeries(input: number[], result: number){
    let low = 0;
    let high = 1;
    while(low < input.length && high < input.length) {
        const sum = input.slice(low, high).reduce((l,r)=>l+r);
        if (sum == result) {
            return [low, high];
        } else if (sum > result) {
            low += 1;
        } else {
            high += 1;
        }
    }

    return [0, 0];
}

function getMinMax(input: number[], start: number, end: number) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for(const candidate of input.slice(start, end)) {
        if (candidate > max) {
            max = candidate;
        }
        if (candidate < min) {
            min = candidate;
        }
    }

    return [min, max];
}


const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const result = 217430975;
    const [startIndex, endIndex] = getContiguousSeries(input, result);
    const [min, max] = getMinMax(input, startIndex, endIndex);

    return min + max;
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