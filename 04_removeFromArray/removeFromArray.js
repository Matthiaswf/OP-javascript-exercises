let removeFromArray = function(arrayInput, elementInput) {
    const index = arrayInput.indexOf(elementInput);
    arrayInput.splice(index, 1);
    console.log('finaleValue', arrayInput);
    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
