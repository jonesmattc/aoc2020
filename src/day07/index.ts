import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");

class Node<T> {
    color: T;
    edges: Map<Node<T>, number>;
    reverseEdges: Map<Node<T>, number>;

    constructor(color: T) {
        this.color = color;
        this.edges = new Map();
        this.reverseEdges = new Map();
    }

    addEdge(weight: number, node: Node<T>) {
        this.edges.set(node, weight);
        node.reverseEdges.set(this, weight);
    }
}

const part1 = (rawInput: string) => {
    const colors: Map<string, Node<string>> = new Map<string, Node<string>>();

    function getNode(color: string): Node<string> {
        if (colors.has(color)) {
            return colors.get(color) as Node<string>;
        } else {
            const node = new Node<string>(color);
            colors.set(color, node);
            return node;
        }
    }
    const rules = parseInput(rawInput);

    for(const rule of rules) {
        const [color, rule_text] = rule.replaceAll(/ bags?\.?/g, "").split(" contain ");
        const parentNode = getNode(color);
        const z = rule_text.split(", ");
        for (const child of z) {
            if (child === "no other") {
                continue;
            }
            const splitIndex = child.indexOf(" ");
            const weight = child.substring(0, splitIndex);
            const childColor = child.substring(splitIndex+1);
            const childNode = getNode(childColor);
            parentNode.addEdge(parseInt(weight, 10), childNode);
        }
    }

    const goldNode = getNode('shiny gold');
    const colorOptions = Array.from(goldNode.reverseEdges.keys());
    const allColors = new Set<string>();

    function addAllColors(colorSet: Set<string>, colorNode:Node<string>) {
        colorSet.add(colorNode.color);
        for (const a of Array.from(colorNode.reverseEdges.keys())) {
            addAllColors(allColors, a);
        }
    }

    for (const a of colorOptions) {
        addAllColors(allColors, a);
    }

    return allColors.size;
}

const part2 = (rawInput: string) => {
    const colors: Map<string, Node<string>> = new Map<string, Node<string>>();

    function getNode(color: string): Node<string> {
        if (colors.has(color)) {
            return colors.get(color) as Node<string>;
        } else {
            const node = new Node<string>(color);
            colors.set(color, node);
            return node;
        }
    }
    const rules = parseInput(rawInput);
    for(const rule of rules) {
        const [color, rule_text] = rule.replaceAll(/ bags?\.?/g, "").split(" contain ");
        const parentNode = getNode(color);
        const z = rule_text.split(", ");
        for (const child of z) {
            if (child === "no other") {
                continue;
            }
            const splitIndex = child.indexOf(" ");
            const weight = child.substring(0, splitIndex);
            const childColor = child.substring(splitIndex+1);
            const childNode = getNode(childColor);
            parentNode.addEdge(parseInt(weight, 10), childNode);
        }
    }

    const goldNode = getNode('shiny gold');
    function addChildren(colorNode: Node<string>): number {
        let bags: number = 0;
        if (colorNode.edges.size == 0) {
            return 0;
        }

        for (const [child, weight] of Array.from(colorNode.edges.entries())) {
            bags += weight * (1+ addChildren(child));
        }
        return bags;
    }

    let totalBags = 0;
    const colorOptions = goldNode.edges.entries();
    for (const [node, weight] of Array.from(colorOptions)) {
        totalBags += weight * (1 + addChildren(node));
    }
    return totalBags;
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