import { PipelineContext } from "solid-pipelines";
import { GenerateCommonPipelineFilesExecutor, GenerateCommonPipelineFilesArguments } from "../GenerateCommonFiles";

import Generator = require("yeoman-generator");

export class ProgramFlowArguments extends PipelineContext {
    yeomanGenerator: Generator;
    commonFilesGeneratorArguments: GenerateCommonPipelineFilesArguments;
    commonFilesGenerator: GenerateCommonPipelineFilesExecutor;
}
