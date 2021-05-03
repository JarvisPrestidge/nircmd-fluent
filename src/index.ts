import { Runner } from "./runner";
import C from "./constants";
import { NirCmdFluent } from "./nircmd/fluent";

const binaryPath = process.arch === "x32" ? C.NIRCMD_PATH_X32 : C.NIRCMD_PATH_X64;

const runner = new Runner(binaryPath);
const NirCmd = new NirCmdFluent(runner);

export { NirCmd };
