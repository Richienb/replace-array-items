/**
 * Replace all items in an array with the same value.
 * @param array The array to modify.
 * @param value The value to set all the items to.
 * @example
 * ```
 * const replaceArrayItems = require("replace-array-items");
 * replaceArrayItems([1, "a", null], "Hello");
 * //=> ["Hello", "Hello", "Hello"]
 * ```
*/
declare function replaceArrayItems<T extends Array, U>(array: T, value: U): U[];

export = replaceArrayItems;
