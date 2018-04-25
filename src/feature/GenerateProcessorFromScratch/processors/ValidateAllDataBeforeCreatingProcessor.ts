import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { GenerateProcessorFileArguments } from "../../GenerateProcessorFile";
import { GenerateProcessorFromScratchMessages } from "../GenerateProcessorFromScratchMessages";

export class GenerateProcessor extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new GenerateProcessor();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        if (!args.processorGenerator) {
            args.AbortPipelineWithErrorAndNoResult(
                GenerateProcessorFromScratchMessages.CannotCreateProcessorWithoutProcessorGenerator);
            return;
        }

        if (!args.model) {
            args.AbortPipelineWithErrorAndNoResult(
                GenerateProcessorFromScratchMessages.CannotCreateProcessorWithoutData);
            return;
        }
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition =
            !!args.argumentsModel
            && !!args.processorModel
            && !!args.processorGenerator
            && !!args.model;
        return safeCondition;
    }
}
