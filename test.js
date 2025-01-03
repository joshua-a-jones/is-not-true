import mocha from "mocha";
import isNotTrue from "../index";

mocha.describe("test", () => {
    mocha.it("should return true if argument is false", () => {
        mocha.assert.strictEqual(isNotTrue(false), true);
    });

    mocha.it("should return false if argument is true", () => {
        mocha.assert.strictEqual(isNotTrue(true), false);
    });

    mocha.it("should throw a TypeError if argument is not a boolean", () => {
        mocha.assert.throws(() => {
            isNotTrue("true");
        }, TypeError);
    });
});
