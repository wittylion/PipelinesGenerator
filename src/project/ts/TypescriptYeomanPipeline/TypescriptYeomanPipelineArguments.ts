import { PipelineContext } from "solid-pipelines";
import { YeomanContext } from "../../../foundation/PipelinesExtensions";
import Generator = require("yeoman-generator");

export class TypescriptYeomanPipelineArguments extends YeomanContext {
    constructor(
        public yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }
}
