import { Runner } from "../runner";
import { NirCmdBase } from "./base";
import { WinAction } from "./win/action";

/**
 * Root level class with all NirCmd commands
 *
 * @export
 * @class NirCmdFluent
 */
export class NirCmdFluent {
    protected readonly base;

    /**
     * Creates an instance of NirCmd.
     *
     * @param {NirCmdBase} base
     */
    constructor(runner: Runner) {
        this.base = new NirCmdBase(runner);
    }

    /**
     * This command allows you to close, hide, show, maximize, and minimize the specified window.
     *
     * @returns {WinAction}
     */
    public win(): WinAction {
        this.base.commandArgsList.push("win");
        return new WinAction(this.base);
    }
}
