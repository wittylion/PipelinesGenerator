import { PipelineRunner, PipelineMessage, MessageFilter, IPipeline } from "solid-pipelines";
import { GenerateFileFromTemplateArguments } from './GenerateFileFromTemplateArguments'
import { GenerateFileFromTemplatePipeline } from './GenerateFileFromTemplatePipeline'
import { CreatedFileResult } from "./models/CreatedFileResult";
import { GenerateFileModel } from "./models/GenerateFileModel";
import Generator = require("yeoman-generator");
import _ from "lodash";

export class GenerateFileFromTemplateExecutor {

    constructor(public Pipeline: IPipeline) {

    }

    async create(
        fileModel: GenerateFileModel,
        creationOptions?: {}
    ) : Promise<{result: CreatedFileResult, messages: PipelineMessage[]}> {
        let args: GenerateFileFromTemplateArguments = new GenerateFileFromTemplateArguments(
            fileModel,
        );

        if (creationOptions) {
            _.assign(args.creationOptions, creationOptions);
        }

        await this.execute(args);

        return {result: args.result, messages: args.GetMessages(MessageFilter.All)};
    }

    execute(args: GenerateFileFromTemplateArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(this.Pipeline, args);
    }
}