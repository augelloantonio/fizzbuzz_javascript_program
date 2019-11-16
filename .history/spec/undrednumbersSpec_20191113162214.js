// Using Jasmin as simple Test Suit for my function

describe("My undredNumbers function", function () {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

    beforeEach(function () {
        undrednumbers = new undredNumbers();
        var isthree = [1, 2, "Three"]
        var isfive = [1, 2, "Three", 4, "Five"]
        var isthreefive = [1, 2, "Three", 4, "Five", "Three", 7, 8, "Three", "Five", 11, "Three", 13, 14, "ThreeFive"]
    });


    describe("Returns number, Three, Five or ThreeFive", function () {
        // Test that the number exist
        it("should exist", function () {
            expect(undrednumbers).toBeDefined();
        });

        // Test that if i = 9 the 
        it("should return Three when called as undrednumbers(9)", function () {
            var result = undredNumbers(3)
            expect(result).toBe(isthree);
        });

        it("should return Five when called as undrednumbers(10)", function () {
            var result = undredNumbers(5)
            expect(result).toBe(isfive);
        });

        it("should return ThreeFive when called as undrednumbers(15)", function () {
            var result = undredNumbers(15)
            expect(result).toBe("ThreeFive");
        });
        it("should return 2 when called as undrednumbers(2)", function () {
            var result = undredNumbers(2)
            expect(result).toBe(2);
        });
    });
});