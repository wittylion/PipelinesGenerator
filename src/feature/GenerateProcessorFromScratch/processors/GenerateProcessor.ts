import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";

export class GenerateProcessor extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new GenerateProcessor();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        let generateProcessorArgs = args.model;

        generateProcessorArgs.arguments = args.argumentsModel;
        generateProcessorArgs.abstractProcessor = args.processorModel;

        await args.processorGenerator.execute(generateProcessorArgs);
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition =
            !!args.processorGenerator
            && !!args.model;
        return safeCondition;
    }
}
