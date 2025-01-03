import { describe, it, expect } from "@jest/globals";
import isNotTrue from "./index.js";

describe("isNotTrue", () => {
    it("should return true if argument is false", () => {
        expect(isNotTrue(false)).toBe(true);
    });

    it("should return false if argument is true", () => {
        expect(isNotTrue(true)).toBe(false);
    });

    it("should throw a TypeError if argument is not a boolean", () => {
        expect(() => {
            isNotTrue("true");
        }).toThrow(TypeError);

        expect(() => {
            isNotTrue(1);
        }).toThrow(TypeError);

        expect(() => {
            isNotTrue({});
        }).toThrow(TypeError);
    });
});
