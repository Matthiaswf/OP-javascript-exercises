let resultArray = [];
const sumAll = function(firstInteger, secondInteger) {
    for (let index = firstInteger; index < secondInteger || index === secondInteger; index++)
         {

        console.log(index);
        resultArray.push(index);
        console.log(resultArray);
    }

    let sum = resultArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
      console.log(sum)
      return sum;
};
// Do not edit below this line
module.exports = sumAll;
