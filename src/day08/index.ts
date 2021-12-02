import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const visited = new Set<number>();
    let accumulator = 0;
    for(let i=0; i < input.length; ) {
        const [instruction, arg1] = input[i].split(" ");
        visited.add(i);
        switch (instruction) {
            case 'acc':
                accumulator += Number(arg1);
                i += 1;
                console.log(i);
                break;
            case 'nop':
                i += 1;
                console.log(i);
                break;
            case 'jmp':
                i += Number(arg1);
                console.log(i);
                break;
        }
        if (visited.has(i)) {
            return accumulator;
        }
    }

    return accumulator;
}

function testIndex(input: string[], index: number): any[] {
    const visited = new Set<number>();
    let accumulator = 0;

    for(let i=0; i < input.length; ) {
        const [instruction, arg1] = input[i].split(" ");
        visited.add(i);
        switch (instruction) {
            case 'acc':
                accumulator += Number(arg1);
                i += 1;
                break;
            case 'nop':
                if(i === index) {
                    i += Number(arg1);
                } else {
                    i += 1;
                }
                break;
            case 'jmp':
                if(i === index) {
                    i += 1;
                } else {
                    i += Number(arg1);
                }
                break;
        }
        if (visited.has(i)) {
            return [false, 0];
        }
    }

    return [true, accumulator];
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    for(const i in input) {
        if (input[i].startsWith('nop') || input[i].startsWith('jmp')) {
            const [success, accumulator] = testIndex(input, Number(i));
            if (success) {
                return accumulator
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