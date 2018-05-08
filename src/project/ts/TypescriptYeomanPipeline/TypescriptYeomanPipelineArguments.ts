import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { YeomanPipelineArguments } from "../../../foundation/YeomanPipeline/YeomanPipelineArguments";

export class TypescriptYeomanPipelineArguments extends YeomanPipelineArguments {
    constructor(
        yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }
}
