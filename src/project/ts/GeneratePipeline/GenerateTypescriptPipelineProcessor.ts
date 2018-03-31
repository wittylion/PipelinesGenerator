import { SafeProcessor } from "solid-pipelines";
import { GenerateTypescriptPipelineArguments } from "./GenerateTypescriptPipelineArguments";

export abstract class GenerateTypescriptPipelineProcessor extends SafeProcessor<GenerateTypescriptPipelineArguments> {
    SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return !args.IsAborted;
    }
}
