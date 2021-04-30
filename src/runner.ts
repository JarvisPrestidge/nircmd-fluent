import { execFile } from "child_process";
import { constants } from "fs";
import { access } from "fs/promises";
import { promisify } from "util";
import { Result } from "./interfaces/common/result";

const execFileAsync = promisify(execFile);

export class Runner {
    private readonly path: string;

    constructor(path: string) {
        if (!path) {
            throw new Error("constructor requires path parameter");
        }

        this.path = path;
    }

    public async init(): Promise<Result> {
        const targetExistsResult = await this.targetExists();

        if (!targetExistsResult.success) {
            return {
                success: false,
                reason: targetExistsResult.reason
            };
        }

        const isExecutableResult = await this.isExecutable();

        if (!isExecutableResult.success) {
            return {
                success: false,
                reason: isExecutableResult.reason
            };
        }

        return {
            success: true
        };
    }

    public async run(args: string[]): Promise<Result<string>> {
        let stdout, stderr;
        try {
            ({ stdout, stderr } = await execFileAsync(this.path, args));
        } catch (error) {
            return {
                success: false,
                reason: error
            };
        }

        if (stderr) {
            return {
                success: false,
                reason: stderr
            };
        }

        return {
            success: true,
            result: stdout
        };
    }

    private async targetExists(): Promise<Result> {
        try {
            await access(this.path, constants.F_OK);
            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                reason: error
            };
        }
    }

    private async isExecutable(): Promise<Result> {
        try {
            await access(this.path, constants.X_OK);
            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                reason: error
            };
        }
    }
}
