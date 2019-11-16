/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undrednumbers(number) {
	for (i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("ThreeFive")
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