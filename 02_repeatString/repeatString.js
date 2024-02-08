let newArray = [''];
let string = '';
let number = 0;

let repeatString = function(string, number) {
    newArray = ['']; 

    if (number < 0 ) {
        return 'ERROR';
    }

    for (let i = 0; i < number; i++) {
       newArray.push(string);
    }
    
    repeatString = newArray.join('')
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
