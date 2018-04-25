import { PipelineContext } from "solid-pipelines";
import { YeomanContext } from "../../../foundation/PipelinesExtensions";
import Generator = require("yeoman-generator");
import { CSharpYeomanPipelineArguments } from "../../cs/CSharpYeomanPipeline/CSharpYeomanPipelineArguments";

export class SitecoreYeomanPipelineArguments extends CSharpYeomanPipelineArguments {
    constructor(
        public yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }
}
