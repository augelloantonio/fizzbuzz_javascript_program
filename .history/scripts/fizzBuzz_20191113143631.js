fizzBuzz = function(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Three";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number
    }
};