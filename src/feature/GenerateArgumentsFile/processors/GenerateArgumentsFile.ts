import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateArgumentsFile extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new GenerateArgumentsFile();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        let argumentsGeneration = new GenerateFileFromTemplateArguments();

        argumentsGeneration.yeomanGenerator = args.yeomanGenerator;
        argumentsGeneration.fileModel = args.fileModel;
        _.assign(
            argumentsGeneration.creationOptions,
            {
                argumentsMemebers: args.members
            }
        );

        await GenerateFileFromTemplateExecutor.Instance.execute(argumentsGeneration);
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
