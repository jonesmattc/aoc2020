import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let filledSeats: number[] = [];
    for(const i in result) {
        const row = result[i];
        const row_string = row.substring(0, 7).replaceAll('F', '0').replaceAll('B', '1');
        const row_num = eval('0b'+row_string);
        const seat_string = row.substring(7).replaceAll('L', '0').replaceAll('R', '1');
        const seat_num = eval('0b'+seat_string);
        const seat_id = row_num*8+seat_num;
        filledSeats.push(seat_id);
    }

    filledSeats.sort((l, r) => { return l - r;})
    return filledSeats[815];
}

const part2 = (rawInput: string) => {
    const result = parseInput(rawInput);
    let filledSeats: number[] = [];
    for(const i in result) {
        const row = result[i];
        const row_string = row.substring(0, 7).replaceAll('F', '0').replaceAll('B', '1');
        const row_num = eval('0b'+row_string);
        const seat_string = row.substring(7).replaceAll('L', '0').replaceAll('R', '1');
        const seat_num = eval('0b'+seat_string);
        const seat_id = row_num*8+seat_num;

        filledSeats.push(seat_id);
    }

    filledSeats.sort((l, r) => { return l - r;})

    let last = filledSeats[0];
    for (const seatId in filledSeats.slice(1)) {
        const seat = parseInt(seatId, 10);
        const seatNum = filledSeats[seat+1];

        if (seatNum > last+1) {
            return last+1;
        } else{
            last = seatNum;
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