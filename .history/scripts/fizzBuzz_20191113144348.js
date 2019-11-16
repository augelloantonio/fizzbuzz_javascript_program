function undrednumbers(i) {
    for (i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            return "ThreeFive";
        } else if (i % 3 === 0) {
            return "Three";
        } else if (i % 5 === 0) {
            return "Five";
        } else {
            return i
        }
    };
};

print(undrednumbers);