import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { YeomanPipelineArguments } from "../../../foundation/YeomanPipeline/YeomanPipelineArguments";

export class CSharpYeomanPipelineArguments extends YeomanPipelineArguments {
    constructor(
        public yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }
}
