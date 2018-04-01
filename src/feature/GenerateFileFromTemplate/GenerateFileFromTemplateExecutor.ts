import { PipelineRunner } from "solid-pipelines";
import { GenerateFileFromTemplateArguments } from './GenerateFileFromTemplateArguments'
import { GenerateFileFromTemplatePipeline } from './GenerateFileFromTemplatePipeline'

export class GenerateFileFromTemplateExecutor {
    public static Instance: GenerateFileFromTemplateExecutor = new GenerateFileFromTemplateExecutor();

    execute(args: GenerateFileFromTemplateArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateFileFromTemplatePipeline.Instance, args);
    }
}