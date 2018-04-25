import { IFileExistanceChecker } from "./abstractions/IFileExistanceChecker";
import Generator = require("yeoman-generator");

export class YeomanExistanceChecker implements IFileExistanceChecker {
    public static create(yeomanGenerator: Generator): YeomanExistanceChecker {
        return new YeomanExistanceChecker(yeomanGenerator);
    }

    constructor(public yeomanGenerator: Generator) {
        
    }

    fileExists(fileName: string): boolean {
        return this.yeomanGenerator.fs.exists(fileName);
    }
}