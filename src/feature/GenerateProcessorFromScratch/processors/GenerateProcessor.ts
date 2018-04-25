import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { GenerateProcessorFileArguments } from "../../GenerateProcessorFile";

export class GenerateProcessor extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new GenerateProcessor();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        let generateProcessorArgs =
            GenerateProcessorFileArguments.Create(
                args.model,
                args.yeomanGenerator,
                args.fileGenerator
            );

        generateProcessorArgs.arguments = args.argumentsModel;
        generateProcessorArgs.abstractProcessor = args.processorModel;

        let result
            = await args.processorGenerator.execute(generateProcessorArgs);
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
