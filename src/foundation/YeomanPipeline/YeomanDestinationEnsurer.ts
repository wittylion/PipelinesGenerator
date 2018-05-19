import { inject, injectable } from "inversify";
import YEOMAN from "./ServiceIdentifiers";
import Generator = require("yeoman-generator");
import "reflect-metadata";

@injectable()
export class YeomanDestinationEnsurer {
    /**
     *
     */
    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator

    ) {

    }

    async ensure(destination: string): Promise<string> {
        return this.yeomanGenerator.destinationPath(destination);
    }
}