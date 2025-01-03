/*!

 * is-not-true <https://github.com/joshua-a-jones/is-not-true>

 *

 * Copyright (c) 2025, Joshua Jones.

 * Licensed under the MIT License.

 */

import isTrue from "is-true"

/**
 * Checks if a boolean value is not true.
 * @param {boolean} value - The boolean value to check.
 * @returns {boolean} - Returns true if the value is false, otherwise false.
 */
const isNotTrue = (value) => {
    if (typeof value !== "boolean") {
        throw new TypeError("is-not-true expects a boolean value")
    }

    const wrapper = { booleanValue: value }

    return !isTrue(wrapper, 'booleanValue')
}

module.exports = isNotTrue;
