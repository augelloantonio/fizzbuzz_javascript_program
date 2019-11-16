/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undredNumbers(number) {
	// Get a variable i and until i is not equal to the number increment i
	for (i = 1; i <= number; i++) {
		const arr = [];
		let str;
		// Check if i is divisible by three and five
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("ThreeFive")
			str = "ThreeFive";
			return false;
		} else if (i % 3 === 0) {
			console.log("Three")
			str = "Three";
		} else if (i % 5 === 0) {
			console.log("Five")
			str = "Five";
		} else {
			console.log(i)
			str = i;
		}
	}
	return result
};

var test = 100;

undredNumbers(test);