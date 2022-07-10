// Your task is to translate the JSDoc comments of the following files 
// to Typescript Type Declarations
// You do not have to implement the function, 
// only make the type declarations

/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */

// function head(array) {
//     return (array != null && array.length)
//         ? array[0]
//         : undefined
// }
// export default head
type HeadType = <T> (arr: T[]) => T | undefined;
const head: HeadType = (arr) => {
    return (arr != null && arr.length)
        ? arr[0]
        : undefined
}

// ============================================================ //

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 * @see has, hasPath, hasPathIn
 * @example
 *
 * const object = create({ 'a': create({ 'b': 2 }) })
 *
 * hasIn(object, 'a')
 * // => true
 *
 * hasIn(object, 'b')
 * // => false
 */
// function hasIn(object, key) {
//     return object != null && key in Object(object)
// }
type HasInType = (object: Object, key: string) => boolean

// ============================================================ //

// import getTag from './.internal/getTag.js'
// import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
// function isBoolean(value) {
//   return value === true || value === false ||
//     (isObjectLike(value) && getTag(value) == '[object Boolean]')
// }
// export default isBoolean
type isBoolean = (object: Object) => boolean

// ============================================================ //
// import isSymbol from './isSymbol.js'
// const INFINITY = 1 / 0
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
// function toString(value) {
//     if (value == null) {
//         return ''
//     }
//     // Exit early for strings to avoid a performance hit in some environments.
//     if (typeof value === 'string') {
//         return value
//     }
//     if (Array.isArray(value)) {
//         // Recursively convert values (susceptible to call stack limits).
//         return `${value.map((other) => other == null ? other : toString(other))}`
//     }
//     if (isSymbol(value)) {
//         return value.toString()
//     }
//     const result = `${value}`
//     return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
// }
// export default toString
type toString = (object: Object) => string

// ============================================================ //

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
// function split(string, separator, limit) {
//     limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0
//     if (!limit) {
//         return []
//     }
//     if (string && (
//         typeof separator === 'string' ||
//         (separator != null && !isRegExp(separator))
//     )) {
//         if (!separator && hasUnicode(string)) {
//             return castSlice(stringToArray(string), 0, limit)
//         }
//     }
//     return string.split(separator, limit)
// }

// export default split
type Separator = RegExp | string;
type Split = (str: [string], separator: Separator, limit: [number]) => [string]

// ============================================================ //

// https://github.com/lodash/lodash/blob/master/hasPath.js
type TpyeOfPath = [string] | string;
type HasPath = (object: Object, path: TpyeOfPath) => boolean

// ============================================================ //

// https://github.com/lodash/lodash/blob/master/filter.js
type Filter = <T> (arr: T[], predicate: Function) => T[]

// ============================================================ //

// https://github.com/lodash/lodash/blob/master/every.js
type Every = <T> (arr: T[], predicate: Function) => boolean

// ============================================================ //

// https://github.com/lodash/lodash/blob/master/map.js
type MapType = <T> (arr: T[], predicate: Function) => T[]