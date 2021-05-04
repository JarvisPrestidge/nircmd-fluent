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
    public async run(): Promise<string> {
        await this.checkTargetExists();

        const commandArgs = [...this.commandArgsList, ...this.additionalArgsList];
        const commandResult = await this.runner.run(commandArgs);

        this.resetCommandArgsState();

        if (commandResult.err) {
            const errorMessage = `Failed to execute nircmd-fluent command: ${commandResult.reason}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        return commandResult.result;
    }

    /**
     * Reset command args state
     *
     * @private
     */
    private resetCommandArgsState(): void {
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
        if (targetExistsResult.err) {
            const errorMessage = `Failed to initialize nircmd-fluent: ${targetExistsResult.reason}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        this.hasConfirmedTargetExists = true;
    }
}
