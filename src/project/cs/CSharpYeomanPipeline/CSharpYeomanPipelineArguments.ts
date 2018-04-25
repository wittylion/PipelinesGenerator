import { PipelineContext } from "solid-pipelines";
import { YeomanContext } from "../../../foundation/PipelinesExtensions";
import Generator = require("yeoman-generator");

export class CSharpYeomanPipelineArguments extends YeomanContext {
    constructor(
        public yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }
}
