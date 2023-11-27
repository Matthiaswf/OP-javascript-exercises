const sumAll = function(firstInteger, secondInteger) {
    const resultArray= [];
    for (let index = firstInteger; index <= secondInteger; index++) {
        resultArray.push(index);
    }

   return resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// Do not edit below this line
module.exports = sumAll;
