// @ts-check
// 아래 JsDocs로 js 자체에 대해 type에 대한 설명을 할 수 있다!
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exit the project
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
