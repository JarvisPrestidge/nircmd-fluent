import { ErrImpl, OkImpl } from "../interfaces/common/result";

/**
 * Type guard to inform the TS compiler whether an input is a string
 *
 * @param {*} input
 * @return {*} {input is string}
 */
export const isStringType = (input: unknown): input is string => {
    return typeof input == "string" || input instanceof String;
};

/**
 * Type guard to inform the TS compiler whether an input is an Ok type
 *
 * @param {*} input
 * @return {*} {input is string}
 */
export const isOkType = (input: unknown): input is OkImpl<unknown> => {
    return input instanceof OkImpl;
};

/**
 * Type guard to inform the TS compiler whether an input is an Err type
 *
 * @param {*} input
 * @return {*} {input is string}
 */
export const isErrType = (input: unknown): input is ErrImpl => {
    return input instanceof ErrImpl;
};
