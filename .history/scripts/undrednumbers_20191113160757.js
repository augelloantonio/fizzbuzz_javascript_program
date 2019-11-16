/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undredNumbers(number) {
	// assign an empty array to store all my results
	const arr = [];
	// Get a variable i and until i is not equal to the number given increment i
	for (i = 1; i <= number; i++) {
		// assign a string variable
		let str;
		// Check if i is divisible by three and five
		if (i % 3 === 0 && i % 5 === 0) {
			// console log testing
			console.log("ThreeFive")
			str = "ThreeFive";
		} else if (i % 3 === 0) {
			// console log testing
			console.log("Three")
			str = "Three";
		} else if (i % 5 === 0) {
			// console log testing
			console.log("Five")
			str = "Five";
		} else {
			console.log(i)
			str = i;
		}
		arr.push(str || i);
	}
	// console log testing
	console.log(arr)
	return arr
};

var test = 100;

undredNumbers(test);