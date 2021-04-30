import { join } from "path";

/**
 * Project wide constants
 *
 * @class Constants
 */
class Constants {
    // Build Paths
    public static readonly PROJECT_ROOT = join(__dirname, "..");

    // Download Directory Path
    public static readonly NIRCMD_DOWNLOAD_DIR_PATH = join(Constants.PROJECT_ROOT, "nircmd");

    // Binary Path
    public static readonly NIRCMD_PATH_X32 = join(Constants.NIRCMD_DOWNLOAD_DIR_PATH, "x32", "nircmdc.exe");
    public static readonly NIRCMD_PATH_X64 = join(Constants.NIRCMD_DOWNLOAD_DIR_PATH, "x64", "nircmdc.exe");

    // Download Uris
    public static readonly NIRCMD_DOWNLOAD_URI_X32 = "https://www.nirsoft.net/utils/nircmd.zip";
    public static readonly NIRCMD_DOWNLOAD_URI_X64 = "https://www.nirsoft.net/utils/nircmd-x64.zip";
}

export default Constants;
