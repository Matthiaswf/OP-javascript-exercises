const sumAll = function(firstInteger, secondInteger) {
    const resultArray = [];

    if ( typeof firstInteger != 'number' || typeof secondInteger != 'number') {
        return 'ERROR';
    }
    
    if (firstInteger < 0 || secondInteger < 0 ) {
        return 'ERROR';
    }

    if (firstInteger < secondInteger) {
        for (let index = firstInteger; index <= secondInteger; index++) {
            resultArray.push(index);
        }
    
        const sum = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        // console.log(sum);
    
        return sum;
    }

    else if (firstInteger > secondInteger) {
        for (let index = secondInteger; index <= firstInteger; index++) {
            resultArray.push(index);
        }
    
        const sum = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        // console.log(sum);
    
        return sum;
    }

};

// sumAll(1, 4000);

// Do not edit below this line
module.exports = sumAll;
