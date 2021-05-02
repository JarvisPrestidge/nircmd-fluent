import { Result } from "../interfaces/common/result";
import { Runner } from "../runner";

/**
 * Base functionality to execute NirCmd commands
 *
 * @export
 * @class NirCmdBase
 */
export class NirCmdBase {
    public commandArgsList: string[] = [];
    public additionalArgsList: string[] = [];

    private runner: Runner;
    private hasConfirmedTargetExists = false;

    /**
     * Creates an instance of NirCmdBase.
     *
     * @param {Runner} runner
     */
    constructor(runner: Runner) {
        if (!runner) {
            throw new Error("constructor requires runner parameter");
        }

        this.runner = runner;
    }

    /**
     * Execute command with fluently composed args
     *
     * @returns {Promise<string>}
     */
    public async run(): Promise<void> {
        // Check if NirCmd binary exists
        await this.checkTargetExists();

        // Attempt to execute command
        const commandArgs = [...this.commandArgsList, ...this.additionalArgsList];
        const commandResult = await this.runner.run(commandArgs);
        this.resetState();
        if (!commandResult.ok) {
            const errorMessage = `Failed to execute NirCmd command: ${commandResult.err}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        // console.log(commandResult.);
        // return commandResult.result;
    }

    /**
     * Reset command args state
     *
     * @private
     */
    private resetState(): void {
        this.commandArgsList = [];
        this.additionalArgsList = [];
    }

    /**
     * Check if NirCmd binary exists
     *
     * @private
     * @return {*}  {Promise<void>}
     */
    private async checkTargetExists(): Promise<void> {
        if (this.hasConfirmedTargetExists) {
            return;
        }

        const targetExistsResult = await this.runner.targetExists();
        if (!targetExistsResult.ok) {
            const errorMessage = `Failed to initialize NirCmd: ${targetExistsResult.err}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        this.hasConfirmedTargetExists = true;
    }
}
