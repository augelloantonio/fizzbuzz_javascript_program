function undrednumbers(number) {
	for (i = 0; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			return i + "ThreeFive";
			console.log(i + "ThreeFive")
		} else if (i % 3 === 0) {
			return i + "Three0) {
			return i + "Five";
		} else {
			return i
		}
	};
};


undrednumbers(100);