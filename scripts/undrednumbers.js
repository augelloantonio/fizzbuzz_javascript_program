/***
 * Function that will check if the given number can be 
 * divided by three, by five, or divided by both
 ***/

function undredNumbers(number) {
	// create a variable and assign an empty array to store all my results
	const arr = [];
	// Get a variable i and until i is not equal to the number given increment i
	for (i = 1; i <= number; i++) {
		// create a variable to assign the i value
		let str;
		// Check if i is divisible by three and five
		if (i % 3 === 0 && i % 5 === 0) {
			// console log testing
			console.log("ThreeFive")
			// assign to the str variable my result
			str = "ThreeFive";
		} else if (i % 3 === 0) {
			// console log testing
			console.log("Three")
			// assign to the str variable my result
			str = "Three";
		} else if (i % 5 === 0) {
			// console log testing
			console.log("Five")
			// assign to the str variable my result
			str = "Five";
		} else {
			// console log testing
			console.log(i)
			// assign to the str variable my result
			str = i;
		}
		// Push the results in the array
		arr.push(str || i);
	}
	// console log testing
	console.log(arr)
	// return the full array
	return arr
};

// Create a variable and assign 100 as value
var test = 100;

// Run script with my var value
undredNumbers(test);

my_array = undredNumbers(test);

// Display the list in the html
function getList(array) {
	var list = document.createElement('ul');
	for (i = 0; i < array.length; i++) {

		var item = document.createElement('li');
		console.log(item)

		// Set its contents:
		item.appendChild(document.createTextNode(array[i]));

		// Add it to the list:
		list.appendChild(item);
	}
	return list;
}

document.getElementById('demo').appendChild(getList(my_array));