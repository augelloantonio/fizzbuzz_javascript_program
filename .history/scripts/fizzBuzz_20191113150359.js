function undrednumbers(number) {
	for (i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(i + "ThreeFive")
			return i + "ThreeFive";
		} else if (i % 3 === 0) {
			console.log(i + "Three")
			return i + "Three";
		} else if (i % 5 === 0) {
			console.log(i + "Five")
			return i + "Five";
		} else {
			console.log('Value is ' + i)
			return i
		}
	};
};

var test = 100;