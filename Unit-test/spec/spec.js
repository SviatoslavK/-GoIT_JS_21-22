var app = require('../script.js');

describe("Exponentiation number of tasks", function() {
    it("", function() {
        // prepare
        var res;

        // act
        res = app.involution(5, 5)

        // assert
        expect(res).toBe(3125);
    });
    it("Raising to zero degree", function() {
        // prepare
        var res;

        // act
        res = app.involution(11, 0)

        // assert
        expect(res).toBe(1);
    });
});
