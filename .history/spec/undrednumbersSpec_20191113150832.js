// Using Jasmin as simple Test Suit for my function

describe("My undrednumbers function", function () {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

    beforeEach(function () {
        undrednumbers = new undrednumbers();
    });


    describe("Returns i, Three, Five or ThreeFive", function () {
        // Test that the number exist
        it("should exist", function () {
            expect(result).toBeDefined();
        });

        // Test that if i = 9 the 
        it("should return Three when called as undrednumbers(9)", function () {
            var result = undrednumbers(9)
            expect(result).toBe(9 + 'Three');
        });

        it("should return Five when called as undrednumbers(10)", function () {
            var result = undrednumbers(10)
            expect(result).toBe(10 + "Five");
        });

        it("should return FizzBuzz when called as undrednumbers(15)", function () {
            var result = undrednumbers(15)
            expect(result).toBe(15 + "ThreeFive");
        });
        it("should return 2 when called as undrednumbers(2)", function () {
            var result = undrednumbers(2)
            expect(result).toBe(2);
        });
    });
});