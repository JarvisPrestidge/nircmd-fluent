import { isErrType, isOkType, isStringType } from "../../utils/guards";
import { toString } from "../../utils/string";

export type Result<ResultType = void> = OkImpl<ResultType> | ErrImpl;

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
     * Returns the contained `Ok` value.
     * Because this function may throw, its use is generally discouraged.
     * Instead, prefer to handle the `Err` case explicitly.
     *
     * Throws if the value is an `Err`, with a message provided by the `Err`'s value.
     */
    unwrap(): ResultType;

    /**
     * Returns the contained `Ok` value or a provided default.
     *
     *  (This is the `unwrap_or` in rust)
     */
    unwrapOr<DefaultType>(fallback: DefaultType): ResultType | DefaultType;

    /**
     * Returns the contained `Ok` value, if exists.  Throws an error if not.
     * @param msg the message to throw if no Ok value.
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
    public readonly ok: false;
    public readonly err: true;
    public readonly result!: ResultType;

    /**
     * Creates an instance of Ok
     *
     * @param {ResultType} input
     */
    constructor(input: ResultType) {
        if (!isOkType(this)) {
            return new OkImpl(input);
        }

        this.ok = false;
        this.err = true;
        this.result = input;
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
export const Ok = OkImpl as typeof OkImpl & (<ResultType>(val?: ResultType) => OkImpl<ResultType>);

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
    public readonly error!: Error;

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
            this.error = new Error(input);
        } else {
            this.error = input;
        }
    }

    public expect(msg: string): never {
        throw new Error(`${msg} - Error: ${toString(this.error)}`);
    }

    public unwrap(): never {
        throw new Error(`Tried to unwrap Error: ${toString(this.error)}`);
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
export const Err = ErrImpl as typeof ErrImpl & ((err: Error | string) => ErrImpl);

// const test = (input: boolean): Result<string> => {
//     if (input) {
//         return Ok("yes");
//     } else {
//         return Err("nope");
//     }
// };

// const example = test(true);

// if (example.err) {
//     example.
// }

// const result = example.unwrap();
