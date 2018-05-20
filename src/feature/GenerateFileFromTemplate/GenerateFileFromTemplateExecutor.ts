import { PipelineRunner, PipelineMessage, MessageFilter, IPipeline, PipelineExecutor } from "solid-pipelines";
import { GenerateFileFromTemplateArguments } from './GenerateFileFromTemplateArguments'
import { GenerateFileFromTemplatePipeline } from './GenerateFileFromTemplatePipeline'
import { CreatedFileResult } from "./models/CreatedFileResult";
import { GenerateFileModel } from "./models/GenerateFileModel";
import Generator = require("yeoman-generator");
import _ from "lodash";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import GENERATE_FILE_FROM_TEMPLATE from "./ServiceIdentifiers";

@injectable()
export class GenerateFileFromTemplateExecutor extends PipelineExecutor {

    constructor(

        @inject(GENERATE_FILE_FROM_TEMPLATE.PIPELINE)
        public pipeline: IPipeline

    ) {
        super(pipeline);
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

        return runner.RunPipeline(this.pipeline, args);
    }
}