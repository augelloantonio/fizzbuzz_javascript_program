var test = 100;


function undrednumbers(test) {
	for (i = 1; i <= test; i++) {
		console.log(i)
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('Value is ' + i + "ThreeFive")
			return i + "ThreeFive";
		} else if (i % 3 === 0) {
			console.log('Value is ' + i + "Three")
			return i + "Three";
		} else if (i % 5 === 0) {
			console.log('Value is ' + i + "Five")
			return i + "Five";
		} else {
			console.log('Value is ' + i)
			return i
		}
	};
};

undrednumbers(test);