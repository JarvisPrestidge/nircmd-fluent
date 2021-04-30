import { NirCmd } from "../../src/index";

// Note: This example brings the window containing the sequence of
// characters "Fortnite" to the foreground.

(async () => {
    let output;
    try {
        output = await NirCmd.win().show().ititle("Fortnite").run();
    } catch (error) {
        console.error(`Failed to bring window to foreground: ${output}`);
    }
    console.log(output);
})();
