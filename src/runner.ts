import { execFile } from "child_process";
import { constants } from "fs";
import { access } from "fs/promises";
import { promisify } from "util";
import { Ok, Err, Result } from "./common/result/result";

const execFileAsync = promisify(execFile);

/**
 * Class responsible for executing NirCmd commands
 *
 * @export
 * @class Runner
 */
export class Runner {
    private readonly path: string;

    /**
     * Creates an instance of Runner.
     *
     * @param {string} path
     */
    constructor(path: string) {
        if (!path) {
            throw new Error("constructor requires path parameter");
        }

        this.path = path;
    }

    /**
     * Executes a NirCmd command
     *
     * @param {string[]} args
     * @return {*}  {Promise<Result<string>>}
     */
    public async run(args: string[]): Promise<Result<string>> {
        let stdout, stderr;
        try {
            ({ stdout, stderr } = await execFileAsync(this.path, args));
        } catch (error) {
            return new Err(error);
        }

        if (stderr) {
            return new Err(stderr);
        } else {
            return new Ok(stdout);
        }
    }

    /**
     * Check if a target at a given path exists
     *
     * @private
     * @return {*}  {Promise<Result>}
     */
    public async targetExists(): Promise<Result> {
        try {
            await access(this.path, constants.F_OK);
            return new Ok();
        } catch (error) {
            return new Err(error);
        }
    }
}
