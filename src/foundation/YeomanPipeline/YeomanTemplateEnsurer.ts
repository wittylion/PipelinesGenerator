import { inject, injectable } from "inversify";
import YEOMAN from "./ServiceIdentifiers";
import Generator = require("yeoman-generator");
import "reflect-metadata";

@injectable()
export class YeomanTemplateEnsurer {
    /**
     *
     */
    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator

    ) {

    }

    async ensure(destination?: string): Promise<string> {
        if (destination) {
            return this.yeomanGenerator.templatePath(destination);
        }
        return this.yeomanGenerator.templatePath();
    }
}
