// Using Jasmin as simple Test Driven Developement for my function

describe("My undredNumbers function", function () {

    // Assigning variables
    beforeEach(function () {
        undrednumbers = new undredNumbers();
        isthree = [1, 2, "Three", 4, "Five", "Three"];
        isfive = [1, 2, "Three", 4, "Five"];
        isthreefive = [1, 2, "Three", 4, "Five", "Three", 7, 8, "Three", "Five", 11, "Three", 13, 14, "ThreeFive"];
    });

    // Describe main test 
    describe("Returns number, Three, Five or ThreeFive", function () {
        // Test that the number exist
        it("should exist", function () {
            expect(undrednumbers).toBeDefined();
        });

        // Test that if number = 6 the result array is equal to isthree array
        it("should have Three in the array when called as undrednumbers(6)", function () {
            var result = undredNumbers(6);
            expect(result).toEqual(isthree);
        });

        // Test that if number = 5 the result array is equal to isfive array
        it("should have Five in the array when called as undrednumbers(5)", function () {
            var result = undredNumbers(5);
            expect(result).toEqual(isfive);
        });

        // Test that if number = 15 the result array is equal to isthreefive array
        it("should have ThreeFive in the array when called as undrednumbers(15)", function () {
            var result = undredNumbers(15);
            expect(result).toEqual(isthreefive);
        });

        // Test that if number = 2 the result array does not have three or five string
        it("should have 2 in the array when called as undrednumbers(2)", function () {
            var result = undredNumbers(2)
            expect(result).toEqual([1, 2]);
        });
    });
});