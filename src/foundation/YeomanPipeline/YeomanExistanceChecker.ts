import Generator = require("yeoman-generator");
import "reflect-metadata";
import { injectable, inject } from "inversify";
import YEOMAN from "./ServiceIdentifiers";

@injectable()
export class YeomanExistanceChecker {
    constructor(
        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator
    ) {

    }

    async check(fileName: string): Promise<boolean> {
        return this.yeomanGenerator.fs.exists(fileName);
    }
}