import { NirCmdBase } from "./base";
import { WinActions } from "./win/action";

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
    constructor(base: NirCmdBase) {
        this.base = base;
    }

    /**
     * This command allows you to close, hide, show, maximize, and minimize the specified window.
     *
     * @returns {WinActions}
     */
    public win(): WinActions {
        this.base.commandArgsList.push("win");
        return new WinActions(this.base);
    }
}
