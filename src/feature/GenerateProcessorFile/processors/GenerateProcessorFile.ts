import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateProcessorFile extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateProcessorFile();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let argumentsGeneration = new GenerateFileFromTemplateArguments();

        argumentsGeneration.yeomanGenerator = args.yeomanGenerator;
        argumentsGeneration.fileModel = args.fileModel;
        _.assign(
            argumentsGeneration.creationOptions,
            {
                argumentsClassName: args.argumentsClassName,
                argumentsFileName: args.argumentsFileName,
                
                abstractProcessorClassName: args.abstractProcessorClassName,
                abstractProcessorFileName: args.abstractProcessorFileName,
            }
        );

        await GenerateFileFromTemplateExecutor.Instance.execute(argumentsGeneration);
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
