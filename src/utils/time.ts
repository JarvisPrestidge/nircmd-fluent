/**
 * Sleep utility function
 *
 * @param {number} ms
 * @return {*}  {Promise<void>}
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
