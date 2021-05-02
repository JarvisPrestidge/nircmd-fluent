/**
 * Helper to wrap an input string in quotes
 *
 * @param {string} input
 * @returns {string}
 */
export const wrapInQuotes = (input: string): string => {
    return `"${input}"`;
};

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
