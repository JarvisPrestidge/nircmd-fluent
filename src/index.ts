import { Runner } from "./runner";
import C from "./constants";
import { NirCmdBase } from "./nircmd/base";
import { NirCmdFluent } from "./nircmd/nircmd";

const binaryPath = process.arch === "x32" ? C.NIRCMD_PATH_X32 : C.NIRCMD_PATH_X64;

const runner = new Runner(binaryPath);
const base = new NirCmdBase(runner);
const NirCmd = new NirCmdFluent(base);

export { NirCmd };
