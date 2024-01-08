var knightProbability = function (n, m, r, c) {
    let dx = [-1, -2, -2, -1, 1, 2, 2, 1];
    let dy = [-2, -1, 1, 2, -2, -1, 1, 2];
    let a = new Array();
    for (let i = 0; i < n; ++i) {
        a[i] = new Array();
        for (let j = 0; j < n; ++j) {
            a[i][j] = new Array();
            for (let k = 0; k <= m; ++k) {
                a[i][j][k] = 0;
            }
        }
    }
    a[r][c][0] = 1.00;
    for (let k = 1; k <= m; k++) {
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < n; i++) {
                if (a[i][j][k - 1] > 0) {
                    for (let l = 0; l < 8; l++) {
                        if (i + dx[l] >= 0 && i + dx[l] < n && j + dy[l] >= 0 && j + dy[l] < n) {
                            a[i + dx[l]][j + dy[l]][k] += 0.125 * a[i][j][k - 1];
                        }
                    }
                }
            }

        }
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ans += a[i][j][m];
        }
    }
    return ans;
};