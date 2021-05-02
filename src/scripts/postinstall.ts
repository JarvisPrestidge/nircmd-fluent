import * as https from "https";
import C from "../constants";
import { createWriteStream } from "fs";
import { join } from "path";
import { unlink } from "fs/promises";

// const uri = process.arch === "x32" ? C.NIRCMD_DOWNLOAD_URI_X32 : C.NIRCMD_DOWNLOAD_URI_X64;

const uri = C.NIRCMD_DOWNLOAD_URI_X32;

const fileName = uri.substring(uri.lastIndexOf("/") + 1);

const filePath = join(C.NIRCMD_DOWNLOAD_DIR_PATH, fileName);

const file = createWriteStream(filePath);

file.on("finish", () => {
    file.close();
});

const request = https.get(uri);

request.on("response", (response) => {
    response.pipe(file);
});

request.on("error", async (error) => {
    console.error(`Failed to download NirCmd: ${error}`);

    try {
        await unlink(filePath);
    } catch (error) {
        console.error(`Failed to unlink NirCmd file: ${error}`);
    }
});
