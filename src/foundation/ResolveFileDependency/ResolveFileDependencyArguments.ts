import { PipelineContext } from "solid-pipelines";
import { YeomanQueryContext } from "../PipelinesExtensions";

import Generator = require("yeoman-generator");
import S from "string";

export class ResolveFileDependencyArguments extends YeomanQueryContext<string> {
    constructor(
        yeomanGenerator: Generator,
        public fileNamePattern: string,
        public fromDirectory: string
    ) { 
        super(yeomanGenerator);
    }

    guesses: string[] = [];

    ResultIsSet(): boolean {
        return !S(this.Result).isEmpty();
    }
}
