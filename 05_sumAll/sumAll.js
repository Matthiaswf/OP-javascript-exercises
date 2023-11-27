let resultArray = [];

const sumAll = function(firstInteger, secondInteger) {
    for (let index = firstInteger; index < secondInteger || index === secondInteger; index++) {
        resultArray.push(index);
    }

    let sum = resultArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
