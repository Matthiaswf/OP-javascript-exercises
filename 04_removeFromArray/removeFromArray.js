let removeFromArray = function(arrayInput, elementInput, elementInputTwo) {
    if (elementInput != undefined) {
        let index = arrayInput.indexOf(elementInput);
            if (index === -1) {

            }
            else {
                arrayInput.splice(index, 1);
            }
    }
    console.log('finaleValue', arrayInput);
    if (elementInputTwo != undefined) {
        let index2 = arrayInput.indexOf(elementInputTwo);
            if ( index2 === -1){

            }
            else {
                arrayInput.splice(index2, 1);
                console.log(index2);
            }
    }
    console.log('finaleValue', arrayInput);
    return arrayInput;
};
//removeFromArray([1, 2, 3, 4], 3, 6);
// Do not edit below this line
module.exports = removeFromArray;
