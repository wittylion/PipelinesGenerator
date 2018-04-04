import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";
import Generator = require("yeoman-generator");

export class GenerateArgumentsFileArguments extends PipelineContext {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator
    ): GenerateArgumentsFileArguments {
        return new GenerateArgumentsFileArguments(fileModel, yeomanGenerator);        
    }

    constructor(
        public fileModel: GenerateFileModel,
        public yeomanGenerator: Generator) {
        super();

    }
}
