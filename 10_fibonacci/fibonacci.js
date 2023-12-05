const fibonacci = function(indexPosition) {
    if (indexPosition <= 0 ) {

        return 'OOPS';
    }

    const fibonacciArray = [0, 1];
     for (let i = 2; i <= indexPosition; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
     }

    return fibonacciArray[indexPosition];
}

// Do not edit below this line
module.exports = fibonacci;
