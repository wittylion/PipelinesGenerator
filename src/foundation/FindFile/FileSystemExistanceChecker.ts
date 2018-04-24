import { IFileExistanceChecker } from "./abstractions/IFileExistanceChecker";
import fs = require("fs");

export class FileSystemExistanceChecker implements IFileExistanceChecker {
    public static readonly Instance = new FileSystemExistanceChecker();

    fileExists(fileName: string): boolean {
        return fs.existsSync(fileName);
    }
}