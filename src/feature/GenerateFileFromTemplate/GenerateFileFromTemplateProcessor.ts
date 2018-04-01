import { SafeProcessor } from "solid-pipelines";
import { GenerateFileFromTemplateArguments } from "./GenerateFileFromTemplateArguments";

export abstract class GenerateFileFromTemplateProcessor extends SafeProcessor<GenerateFileFromTemplateArguments> {
    SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return !args.IsAborted;
    }
}
