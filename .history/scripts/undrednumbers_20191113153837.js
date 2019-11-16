/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undredNumbers(number) {
	// Get a variable i and until i is not equal to the number increment i
	for (i = 1; i <= number; i++) {
		// Check if i is divisible by three and five
		if (number % 3 === 0 && i % 5 === 0) {
			console.log("ThreeFive")
			return "ThreeFive";
		} else if (number % 3 === 0) {
			console.log("Three")
			return "Three";
		} else if (number % 5 === 0) {
			console.log("Five")
			return "Five";
		} else {
			console.log(number)
			return number;
		}
	}
	return number
};

var test = 100;

undredNumbers(test);