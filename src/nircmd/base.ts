import { Runner } from "../runner";

/**
 * Base functionality to execute NirCmd commands
 *
 * @export
 * @class NirCmdBase
 */
export class NirCmdBase {
    private readonly runner: Runner;

    public commandArgsList: string[] = [];
    public additionalArgsList: string[] = [];

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
        // Attempt to find NirCmd binary + check access rights
        const initResult = await this.runner.init();
        if (!initResult.success) {
            const errorMessage = `Failed to initialize NirCmd: ${initResult.reason}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        // Attempt to execute command
        const commandResult = await this.runner.run(this.commandArgsList);
        if (!commandResult.success) {
            const errorMessage = `Failed to execute NirCmd command: ${commandResult.reason}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        console.log(commandResult.result);
        return commandResult.result;
    }
}
