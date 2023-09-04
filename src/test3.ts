function quickestPath(board: { ladders: number[][]; snakes: number[][] }): number[] {
    if (!board || !board.ladders || !board.snakes) {
        throw new Error("Invalid board");
    }

    const ladders: Map<number, number> = new Map(board.ladders.map(pair => [pair[0], pair[1]]));
    const snakes: Map<number, number> = new Map(board.snakes.map(pair => [pair[0], pair[1]]));

    const queue: { position: number; rolls: number[] }[] = [{ position: 1, rolls: [] }];
    const visited: Set<number> = new Set();

    while (queue.length > 0) {
        const current = queue.shift()!;

        if (current.position === 100) {
            return current.rolls;
        }
        if (visited.has(current.position)) {
            continue;
        }

        visited.add(current.position);

        for (let i = 1; i <= 6; i++) {
            const newPosition = current.position + i;

            if (ladders.has(newPosition)) {
                queue.push({ position: ladders.get(newPosition)!, rolls: [...current.rolls, i] });
            } else if (snakes.has(newPosition)) {
                queue.push({ position: snakes.get(newPosition)!, rolls: [...current.rolls, i] });
            } else {
                queue.push({ position: newPosition, rolls: [...current.rolls, i] });
            }
        }
    }

    throw new Error("No valid path found.");
}

const gameBoard = {
    ladders: [
        [3, 39],
        [14, 35],
        [31, 70],
        [44, 65],
        [47, 86],
        [63, 83],
        [71, 93],
    ],
    snakes: [
        [21, 4],
        [30, 8],
        [55, 38],
        [79, 42],
        [87, 54],
        [91, 48],
        [96, 66],
    ],
};

try {
    const result = quickestPath(gameBoard);
    console.log("Position is", result);
} catch (error) {
    console.error(error);
}
