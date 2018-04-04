import { GenerateAbstractProcessorFileProcessor } from "../GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../GenerateAbstractProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateAbstractProcessorFile extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new GenerateAbstractProcessorFile();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {
        let abstractProcessorGeneration = new GenerateFileFromTemplateArguments();

        abstractProcessorGeneration.fileModel = args.fileModel;
        abstractProcessorGeneration.yeomanGenerator = args.yeomanGenerator;
        _.assign(abstractProcessorGeneration.creationOptions,
            {
                argumentsClassName: args.argumentsClassName,
                argumentsFileName: args.argumentsFileName
            });

        await GenerateFileFromTemplateExecutor.Instance.execute(abstractProcessorGeneration);
    }

    public SafeCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
