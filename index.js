/**
 * Checks if a boolean value is not true.
 * @param {boolean} value - The boolean value to check.
 * @returns {boolean} - Returns true if the value is false, otherwise false.
 */
const isNotTrue = (value) => {
    if (typeof value !== "boolean") {
        throw new TypeError("is-not-true expects a boolean value")
    }

    return value !== true;
}

export default isNotTrue