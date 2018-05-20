import fs = require("fs");
import { injectable } from "inversify";

@injectable()
export class FileSystemExistanceChecker {
    async check(fileName: string): Promise<boolean> {
        return fs.existsSync(fileName);
    }
}