let removeFromArray = function(arrayInput, elementInput, elementInputTwo) {
    if (elementInput != undefined) {
        const index = arrayInput.indexOf(elementInput);
        if (index !== -1) arrayInput.splice(index, 1);
    }

    if (elementInputTwo != undefined) {
        const index2 = arrayInput.indexOf(elementInputTwo);
        if (index2 !== -1) arrayInput.splice(index2, 1);        
    }

    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
