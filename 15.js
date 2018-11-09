function fact(n) {
    if (n === 1) {
        return n;
    } else {
        return n * fact(n - 1);
    }
}

function findRoutesCount(m, n) {
    const cache = {};

    function recursive(x, y) {
        if (x === 0 || y === 0) {
            return 1;
        }

        if (!cache[`${x}${y}`]) {
            cache[`${x}${y}`] = recursive(x - 1, y) + recursive(x, y - 1);
        }
        return cache[`${x}${y}`];
    }

    return recursive(m, n);
}

function countRoutes(x, y) {
    const grid = [];
    for (let i = 0; i < y + 1; i++) {
        grid.push([]);
    }
    for (let i = 0; i <= y; i++) {
        grid[i][0] = 1;
    }
    for (let i = 0; i <= x; i++) {
        grid[0][i] = 1;
    }

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }
    return grid[x][y]
}