const leapYears = function(year) {

    if ( year % 100 === 0 && year %  400 === 0 ) {
        //console.log('true');

        return true;
    }    

    if ( year % 100 === 0 && year % 400 != 0 ) {
            //console.log('false');

            return false;
    }


    if ( year % 4 === 0) {
        //console.log('true');

        return true;
    } 
    
    if ( year % 4 != 0) {
        //console.log('false');

        return false;
    }

};

//leapYears(1997)

// Do not edit below this line
module.exports = leapYears;
