let resultArray = [];
const sumAll = function(firstInteger, secondInteger) {
    for (let index = firstInteger; index < secondInteger || index === secondInteger; index++)
         {

        console.log(index);
        resultArray.push(index);
        console.log(resultArray);

    }
    return resultArray;
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
