const fibonacci = function(num) {
    if (num == 0) return 0;
    if (num < 0) return 'OOPS';
    if (num == 1 || num==2) {
            return 1
        }
    let f1 = 1;
    let f2 = 1; 
    for (i = 3; i <= num; i++) {
        fibo = f1 + f2
        f1 = f2
        console.log(f1)
        f2 = fibo
        console.log(f2)
    }
    return fibo
};

// Do not edit below this line
module.exports = fibonacci;
