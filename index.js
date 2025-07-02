/*
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

var accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];
console.log(accounts);

function maximumWealth(accounts) {
    var max = 0;
    for (let i = 0; i < accounts.length; i++) {
        var cont = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            cont += accounts[i][j];
        }
        if (cont > max) {
            max = cont
        }
    }
    return max;
}

maximumWealth(accounts);
console.log(maximo);