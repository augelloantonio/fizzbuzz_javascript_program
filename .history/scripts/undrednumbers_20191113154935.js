/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undredNumbers(number) {
	// Get a variable i and until i is not equal to the number increment i
	i = 0;
	while (i <= number) {
		i++;
		// Check if i is divisible by three and five
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("ThreeFive")
			// Return 
			result = "ThreeFive";
		} else if (i % 3 === 0) {
			console.log("Three")
			result = "Three";
		} else if (i % 5 === 0) {
			console.log("Five")
			result = "Five";
		} else {
			result = i;
		}
		return result;
	}
};

var test = 100;

undredNumbers(test);