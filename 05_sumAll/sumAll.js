const sumAll = function(firstInteger, secondInteger) {
    const resultArray = [];

    for (let index = firstInteger; index <= secondInteger; index++) {
        resultArray.push(index);
    }

    // const test = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(test);

    return resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// sumAll(1, 4000);

// Do not edit below this line
module.exports = sumAll;
