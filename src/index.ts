import { Runner } from "./runner";
import C from "./constants";
import { NirCmdBase } from "./nircmd/base";
import { NirCmdFluent } from "./nircmd/nircmd";
import { sleep } from "./utils/time";

const binaryPath = process.arch === "x32" ? C.NIRCMD_PATH_X32 : C.NIRCMD_PATH_X64;

const runner = new Runner(binaryPath);
const base = new NirCmdBase(runner);
const NirCmd = new NirCmdFluent(base);

// export { NirCmd };

(async () => {
    // const path = "c:\\Users\\jarvis\\Documents\\GitHub\\nircmd-fluent\\nircmd\\x64\\nircmd.exe";
    // const args = ["win", "activate", "ititle", "Calc"];
    // const p2 = spawn(path, args);

    // console.log(p2);

    // p2.stdout.on("data", (data) => {
    //     console.log(`stdout: ${data}`);
    // });

    // p2.stderr.on("data", (data) => {
    //     console.error(`stderr: ${data}`);
    // });

    // p2.on("close", (code) => {
    //     console.log(`child process exited with code ${code}`);
    // });
    try {
        await NirCmd.win().activate().ititle("Calc").run();
        await sleep(2000);
        // await NirCmd.win().togglemax().ititle("Calc").run();
        // await sleep(2000);
        // await NirCmd.win().togglemax().ititle("Calc").run();
        // await sleep(2000);
        // await NirCmd.win().togglemax().ititle("Calc").run();
        // await sleep(2000);
        // await NirCmd.win().activate().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().min().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().max().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().center().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().hide().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().show().ititle("Fortnite").run();
        // await sleep(2000);
        // await NirCmd.win().togglehide().ititle("Fortnite").run();
    } catch (error) {
        const errorMessage = `Failed to bring window to foreground: ${error}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
})();
