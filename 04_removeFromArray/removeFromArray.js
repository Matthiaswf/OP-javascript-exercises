let removeFromArray = function(arrayInput, elementInput, elementInputTwo) {
    const index = arrayInput.indexOf(elementInput);
    arrayInput.splice(index, 1);
    if( elementInputTwo != undefined){
        const index2 = arrayInput.indexOf(elementInputTwo);
        arrayInput.splice(index2, 1);
    }
    console.log('finaleValue', arrayInput);
    return arrayInput;
};
//removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
