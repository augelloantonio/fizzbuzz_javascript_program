function undrednumbers() {
	for (i = 0; i < 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			return i + "ThreeFive";
		} else if (i % 3 === 0) {
			return i + "Three";
		} else if (i % 5 === 0) {
			return i + "Five";
		} else {
			return i
		}
	};
};