/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
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