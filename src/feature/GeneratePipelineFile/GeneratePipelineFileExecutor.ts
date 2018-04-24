import { IPipeline, PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GeneratePipelineFileArguments } from './GeneratePipelineFileArguments'
import { GeneratePipelineFilePipeline } from './GeneratePipelineFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";

import Generator = require("yeoman-generator");
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GeneratePipelineFileExecutor {
    create(
        model: GenerateFileModel, 
        yeomanGenerator: Generator, 
        fileGenerator: GenerateFileFromTemplateExecutor,
        processors: CreatedFileResult[],
        abstractProcessor: CreatedFileResult
    ): Promise<{messages: PipelineMessage[], result: CreatedFileResult}> {
        let args: GeneratePipelineFileArguments =
            GeneratePipelineFileArguments.Create(model, yeomanGenerator, fileGenerator);
        args.processors = processors;
        args.abstractProcessor = abstractProcessor;

        return this.execute(args);
    }
    public static Instance: GeneratePipelineFileExecutor = new GeneratePipelineFileExecutor(GeneratePipelineFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: GeneratePipelineFileArguments) : Promise<{messages: PipelineMessage[], result: CreatedFileResult}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            messages: args.GetAllMessages(),
            result: args.GetResult()
        };
    }
}