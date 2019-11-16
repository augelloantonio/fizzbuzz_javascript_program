fizzBuzz = function(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "ThreeFive";
    } else if (number % 3 === 0) {
        return "Three";
    } else if (number % 5 === 0) {
        return "Five";
    } else {
        return number
    }
};