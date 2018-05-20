import { inject, injectable } from "inversify";
import YEOMAN from "./ServiceIdentifiers";
import Generator = require("yeoman-generator");
import "reflect-metadata";

@injectable()
export class YeomanFileGenerator {
    /**
     *
     */
    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator

    ) {

    }

    async generate(template: string, destination: string, options: {}): Promise<void> {
        this.yeomanGenerator.fs.copyTpl(template, destination, options);
    }
}