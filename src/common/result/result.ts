import { isErrType, isOkType, isStringType } from "./guards";
import { toString } from "../../utils/string";

export type Result<ResultType = void> = Ok<ResultType> | Err;

/**
 * Result method contract
 *
 * @interface BaseResult
 * @template ResultType
 */
interface BaseResult<ResultType> {
    /**
     * `true` when the result is Ok
     *
     * @type {boolean}
     */
    readonly ok: boolean;
    /**
     * `true` when the result is Err
     *
     * @type {boolean}
     */
    readonly err: boolean;

    /**
     * Returns the contained `Ok` value, if exists.
     * Throws an error if not.
     *
     * @return {*}  {ResultType}
     */
    unwrap(): ResultType;

    /**
     * Returns the contained `Ok` value or a provided default value.
     *
     * @template DefaultType
     * @param {DefaultType} fallback The fallback value if no Ok value.
     * @return {*}  {(ResultType | DefaultType)}
     */
    unwrapOr<DefaultType>(fallback: DefaultType): ResultType | DefaultType;

    /**
     * Returns the contained `Ok` value, if exists.
     * Throws an error with the specified `msg` if not.
     *
     * @param {string} msg The message to throw if no Ok value.
     * @return {*}  {ResultType}
     */
    expect(msg: string): ResultType;
}

/**
 * Contains the result value on success
 *
 * @export
 * @class OkImpl
 * @implements {BaseResult<ResultType>}
 * @template ResultType
 */
export class OkImpl<ResultType> implements BaseResult<ResultType> {
    public readonly ok: true;
    public readonly err: false;

    public readonly result: ResultType;

    /**
     * Creates an instance of Ok
     *
     * @param {ResultType} input
     */
    constructor(input?: ResultType) {
        if (!isOkType(this)) {
            return new OkImpl(input);
        }

        this.ok = true;
        this.err = false;

        if (input) {
            this.result = input;
        }
    }

    public expect(): ResultType {
        return this.result;
    }

    public unwrap(): ResultType {
        return this.result;
    }

    public unwrapOr(): ResultType {
        return this.result;
    }
}

/**
 * Contains the result value on success
 *
 * @class Ok
 * @template ResultType
 */
export const Ok = OkImpl as typeof OkImpl & (<ResultType>(val?: ResultType) => Ok<ResultType>);

export type Ok<ResultType> = OkImpl<ResultType>;

/**
 * Contains the error value on failure
 *
 * @export
 * @class ErrImpl
 * @implements {BaseResult<never>}
 */
export class ErrImpl implements BaseResult<never> {
    public readonly ok: false;
    public readonly err: true;

    public readonly reason: Error;

    /**
     * Creates an instance of Err.
     *
     * @param {(Error | string)} input
     */
    constructor(input: Error | string) {
        if (!isErrType(this)) {
            return new ErrImpl(input);
        }

        this.ok = false;
        this.err = true;

        if (isStringType(input)) {
            this.reason = new Error(input);
        } else {
            this.reason = input;
        }
    }

    public expect(msg: string): never {
        throw new Error(`${msg} - Error: ${toString(this.reason)}`);
    }

    public unwrap(): never {
        throw new Error(`Tried to unwrap Error: ${toString(this.reason)}`);
    }

    public unwrapOr<DefaultType>(fallback: DefaultType): DefaultType {
        return fallback;
    }
}

/**
 * Contains the error value on failure
 *
 * @class Err
 */
export const Err = ErrImpl as typeof ErrImpl & ((err: Error | string) => Err);

export type Err = ErrImpl;
