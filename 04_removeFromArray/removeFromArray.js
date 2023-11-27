let removeFromArray = function(arrayInput, elementInput, elementInputTwo, elementInputThree, elementInputFour) {
    if (elementInput != undefined) {
        const index = arrayInput.indexOf(elementInput);
        if (index !== -1) arrayInput.splice(index, 1);
    }

    if (elementInputTwo != undefined) {
        const index2 = arrayInput.indexOf(elementInputTwo);
        if (index2 !== -1) arrayInput.splice(index2, 1);        
    }

    if (elementInputThree != undefined) {
        const index3 = arrayInput.indexOf(elementInputThree);
        if (index3 !== -1) arrayInput.splice(index3, 1);        
    }

    if (elementInputFour != undefined) {
        const index4 = arrayInput.indexOf(elementInputFour);
        if (index4 !== -1) arrayInput.splice(index4, 1);        
    }

    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
