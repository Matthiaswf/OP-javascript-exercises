const sumAll = function(firstInteger, secondInteger) {
    const resultArray = [];

    for (let index = firstInteger; index <= secondInteger; index++) {
        resultArray.push(index);
    }

    const sum = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(sum);

    return sum;
};

// sumAll(1, 4000);

// Do not edit below this line
module.exports = sumAll;
