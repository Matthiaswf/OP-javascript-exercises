const repeatString = function(inputText, inputNumber) {
    let outputText = "";
    if ( inputNumber < 0){
        return "ERROR";
    }
    for (let i = 0; i < inputNumber; i++) {
        outputText += inputText;   
      }
      return outputText;    
};


// Do not edit below this line
module.exports = repeatString;
