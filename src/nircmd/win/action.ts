import { AnnotateMethodName } from "../../utils/class";
import { NirCmdBase } from "../base";
import { WinFind } from "./find";

/**
 * Class responsible for selecting actions to take on the specified window
 *
 * @export
 * @class WinActions
 */
export class WinActions {
    private readonly base: NirCmdBase;
    private readonly methodName: string;

    /**
     * Creates an instance of WinActions.
     *
     * @param {NirCmdBase} base
     */
    constructor(base: NirCmdBase) {
        this.base = base;
    }

    /**
     * Allows you to make an action on child window of the specified top-level window.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public child(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Closes the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public close(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Hides the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public hide(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Shows again the specified windows. (after hiding it with 'hide' command)
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public show(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Hides the specified windows and then shows it again. You can use this action to repaint the content of a window.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public hideshow(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Toggles the specified windows between visible and hidden state.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public togglehide(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Bring the specified window to the front.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public activate(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Flashes the specified window.
     * The values in [Additional Parameters] specifies the number of flashes (the default is 5)
     * and the number of milliseconds of every flash.
     *
     * @param {number} number
     * @param {number} durationMs
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public flash(number: number, durationMs: number): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(number.toString());
        this.base.additionalArgsList.push(durationMs.toString());
        return new WinFind(this.base);
    }

    /**
     * Maximizes the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public max(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Minimizes the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public min(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Restores the specified windows to normal state, after minimizing or maximizing them.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public normal(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Toggles the specified windows between minimized and normal state.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public togglemin(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Toggles the specified windows between maximized and normal state.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public togglemax(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Make the specified windows transparent.
     * The value in [Additional Parameters] is a number between 0 and 255 that specifies the transparency level.
     * 0 = completely transparent. 255 = completely opaque.
     *
     * @param {number} transparency
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public trans(transparency: number): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(transparency.toString());
        return new WinFind(this.base);
    }

    /**
     * Set the size of the specified windows.
     * The values in [Additional Parameters] specifies the desired window size - x, y, width, height.
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public setsize(x: number, y: number, width: number, height: number): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(x.toString());
        this.base.additionalArgsList.push(y.toString());
        this.base.additionalArgsList.push(width.toString());
        this.base.additionalArgsList.push(height.toString());
        return new WinFind(this.base);
    }

    /**
     * Move/resize the window.
     * The values in [Additional Parameters] specifies the number of pixels to move/change
     * x, y, width, height.
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public move(x: number, y: number, width: number, height: number): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(x.toString());
        this.base.additionalArgsList.push(y.toString());
        this.base.additionalArgsList.push(width.toString());
        this.base.additionalArgsList.push(height.toString());
        return new WinFind(this.base);
    }

    /**
     * Center the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public center(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Set the top-most state of the specified windows.
     * If the value in [Additional Parameters] is 1, the specified windows will become top-most windows.
     * If the value is 0, the top-most state will be canceled.
     *
     * @param {number} state
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public settopmost(state: number): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(state.toString());
        return new WinFind(this.base);
    }

    /**
     * Redraw the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public redraw(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Modify the caption/title of the specified windows.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public settext(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Set the focus to the specified window.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public focus(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Disable the specified window.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public disable(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Enable the specified window.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public enable(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Toggles the specified windows between disabled and enabled state.
     *
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public toggledisable(): WinFind {
        this.base.commandArgsList.push(this.methodName);
        return new WinFind(this.base);
    }

    /**
     * Post a message to the specified window.
     * The 3 values in [Additional Parameters] specifies the message parameters Msg, wParam, lParam.
     *
     * @param {string} msg
     * @param {string} wParam
     * @param {string} lParam
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public postmsg(msg: string, wParam: string, lParam: string): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(msg);
        this.base.additionalArgsList.push(wParam);
        this.base.additionalArgsList.push(lParam);
        return new WinFind(this.base);
    }

    /**
     * Send a message to the specified window.
     * The 3 values in [Additional Parameters] specifies the message parameters Msg, wParam, lParam.
     *
     * @param {string} msg
     * @param {string} wParam
     * @param {string} lParam
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public sendmsg(msg: string, wParam: string, lParam: string): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(msg);
        this.base.additionalArgsList.push(wParam);
        this.base.additionalArgsList.push(lParam);
        return new WinFind(this.base);
    }

    /**
     * Send a click command to the button inside a dialog-box.
     * The value in [Additional Parameters] should specify the control ID of the button.
     * Or one of the following predefined buttons: yes, no, ok, cancel, retry, ignore, close, help.
     *
     * @param {string} controlIdOrButton
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public dlgclick(controlIdOrButton: string): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(controlIdOrButton);
        return new WinFind(this.base);
    }

    /**
     * Set the text to the specified control inside a dialog-box.
     * The value in [Additional Parameters] should specify the control ID.
     *
     * @param {string} controlId
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public dlgsettext(controlId: string): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(controlId);
        return new WinFind(this.base);
    }

    /**
     * Set the focus to the specified control inside a dialog-box.
     * The value in [Additional Parameters] should specify the control ID
     *
     * @param {string} controlId
     * @returns {WinFind}
     */
    @AnnotateMethodName()
    public dlgsetfocus(controlId: string): WinFind {
        this.base.commandArgsList.push(this.methodName);
        this.base.additionalArgsList.push(controlId);
        return new WinFind(this.base);
    }
}
