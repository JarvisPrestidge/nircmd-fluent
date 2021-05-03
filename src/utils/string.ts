/**
 * Convert unknown input to string
 *
 * @param {unknown} input
 * @return {*}  {string}
 */
export const toString = (input: unknown): string => {
    const value = String(input);
    if (value === "[object Object]") {
        return JSON.stringify(input);
    }
    return value;
};
