import { wrapInQuotes } from "../../utils/string";
import { AnnotateMethodName as AnnotateMethodName } from "../../utils/class";
import { NirCmdBase } from "../base";

type NirCmdExecute = Pick<NirCmdBase, "run">;

/**
 * Class responsible for finding a specific window
 *
 * @export
 * @class WinFind
 */
export class WinFind {
    private readonly base: NirCmdBase;
    private readonly methodName: string;

    /**
     * Creates an instance of WinFind.
     *
     * @param {NirCmdBase} base
     */
    constructor(base: NirCmdBase) {
        this.base = base;
    }

    /**
     * Finds the desired window by specifying the handle of the window in [window to find] parameter.
     *
     * @param {string} handle
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public handle(handle: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(handle);
        return this.base;
    }

    /**
     * Finds the desired child window by specifying the id of the child window.
     * Useful only for child windows.
     *
     * @param {string} id
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public id(id: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(id);
        return this.base;
    }

    /**
     * Finds the desired window by specifying the class name of the window in [window to find] parameter.
     *
     * @param {string} className
     * @returns {this}
     */
    @AnnotateMethodName()
    public class(className: string): Omit<NirCmdBase, "commandArgsList"> {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(wrapInQuotes(className));
        return this.base;
    }

    /**
     * Finds the desired window by specifying the exact title of the window in [window to find] parameter.
     *
     * @param {string} title
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public title(title: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(wrapInQuotes(title));
        return this.base;
    }

    /**
     * Finds the desired window by specifying the first few characters of the window in [window to find] parameter.
     *
     * @param {string} title
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public stitle(title: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(wrapInQuotes(title));
        return this.base;
    }

    /**
     * Finds the desired window by specifying a sequence of characters that exists in the window title.
     *
     * @param {string} title
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public ititle(title: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(wrapInQuotes(title));
        return this.base;
    }

    /**
     * All top windows.
     *
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public alltop(): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        return this.base;
    }

    /**
     * All top windows, except of desktop and tray windows.
     *
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public alltopnodesktop(): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        return this.base;
    }

    /**
     * The current active window.
     *
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public active(): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        return this.base;
    }

    /**
     * The window in foreground.
     *
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public foreground(): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        return this.base;
    }

    /**
     * The desktop window
     *
     * @returns {NirCmdExecute}
     */
    @AnnotateMethodName()
    public desktop(): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        return this.base;
    }

    /**
     * Finds the desired window by specifying one of either:
     * process ID (for example: /3412)
     * process name (for example: firefox.exe).
     *
     * @param {string} args
     * @returns {this}
     */
    @AnnotateMethodName()
    public process(process: string): NirCmdExecute {
        this.base.commandArgsList.push(this.methodName);
        this.base.commandArgsList.push(process);
        return this.base;
    }
}
