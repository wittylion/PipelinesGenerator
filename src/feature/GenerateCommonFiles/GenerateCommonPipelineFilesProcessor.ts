import { SafeProcessor } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from "./GenerateCommonPipelineFilesArguments";

export abstract class GenerateCommonPipelineFilesProcessor extends SafeProcessor<GenerateCommonPipelineFilesArguments> {
    SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && !args.IsAborted;
    }
}
