import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const result = parseInput(rawInput);
    const map: string[][] = [];
    let row_length = 0;

    for (const index in result) {
        const row = result[index].split('');
        map.push(row);
        row_length = row.length;
    }

    let trees: number[] = [0, 0, 0, 0, 0];
    for (const index in map) {
        const row_index = parseInt(index, 10);
        if (row_index % 2 === 0) {
            // 2x1 slope
            if (map[row_index][(row_index/2) % row_length] === '#') {
                trees[4] += 1;
            }
        }


        let is_tree = map[row_index][1*row_index % row_length] === '#';
        if (is_tree) {
            trees[0] += 1;
        }

        is_tree = map[row_index][3*row_index % row_length] === '#';
        if (is_tree) {
            trees[1] += 1;
        }

        is_tree = map[row_index][5*row_index % row_length] === '#';
        if (is_tree) {
            trees[2] += 1;
        }
        is_tree = map[row_index][7*row_index % row_length] === '#';
        if (is_tree) {
            trees[3] += 1;
        }
    }
    return trees[1];
}

const part2 = (rawInput: string) => {
    const result = parseInput(rawInput);
    const map: string[][] = [];
    let row_length = 0;

    for (const index in result) {
        const row = result[index].split('');
        map.push(row);
        row_length = row.length;
    }

    let trees: number[] = [0, 0, 0, 0, 0];
    for (const index in map) {
        const row_index = parseInt(index, 10);
        if (row_index % 2 === 0) {
            // 2x1 slope
            if (map[row_index][(row_index/2) % row_length] === '#') {
                trees[4] += 1;
            }
        }


        let is_tree = map[row_index][1*row_index % row_length] === '#';
        if (is_tree) {
            trees[0] += 1;
        }

        is_tree = map[row_index][3*row_index % row_length] === '#';
        if (is_tree) {
            trees[1] += 1;
        }

        is_tree = map[row_index][5*row_index % row_length] === '#';
        if (is_tree) {
            trees[2] += 1;
        }
        is_tree = map[row_index][7*row_index % row_length] === '#';
        if (is_tree) {
            trees[3] += 1;
        }
    }
    return trees.reduce((l, r) => {return l*r;});
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