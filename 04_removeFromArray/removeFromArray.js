let removeFromArray = function(arrayInput, elementInput) {
    let index = arrayInput.indexOf(elementInput);
    return arrayInput.splice(index, 1)
};

// Do not edit below this line
module.exports = removeFromArray;
