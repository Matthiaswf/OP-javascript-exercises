const palindromes = function (string) {  
let compactedString =  string
.split("")
.join('')
.replace(/[^\w\s\']|_/g, '')
.replace(/\s+/g, "")
.toLowerCase();

let reversedString = string
.split('')
.reverse()
.join('')
.replace(/[^\w\s\']|_/g, '')
.replace(/\s+/g, "")
.toLowerCase();

    if (compactedString === reversedString) {

        return  true;
    }

    else {

        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
