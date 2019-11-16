/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undrednumbers(number) {
	// Get a variable i and until i is not equal to the number increment i
	for (i = 1; i <= number; i++) {
		// Check if i is divisible by three and five
		if (i % 3 === 0 && i % 5 === 0) {
			// Print
			console.log("ThreeFive")
			return "ThreeFive"
		} else if (i % 3 === 0) {
			console.log("Three")
		} else if (i % 5 === 0) {
			console.log("Five")
		} else {
			console.log(i)
		}
	}
};

var test = 100;

undrednumbers(test);