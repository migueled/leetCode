var fizzBuzz = function (n) {
    let a = [];
    for (let index = 1; index <= n; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            a.push('FizzBuzz');
            continue
        } if (index % 3 == 0) {
            a.push('Fizz');
            continue
        } if (index % 5 == 0) {
            a.push('Buzz');
            continue
        }
        a.push(index + "");
    }
    return a;
};

console.log(fizzBuzz(15));