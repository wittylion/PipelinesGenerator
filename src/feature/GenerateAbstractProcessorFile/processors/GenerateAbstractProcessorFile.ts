import { GenerateAbstractProcessorFileProcessor } from "../GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../GenerateAbstractProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import { GenerateAbstractProcessorFileMessages } from "../GenerateAbstractProcessorFileMessages";
import S from "string";

export class GenerateAbstractProcessorFile extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new GenerateAbstractProcessorFile();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {
        let result
            = await args.fileGenerator.create(
                args.fileModel,
                {
                    argumentsClassName: args.argumentsClassName,
                    argumentsFileName: args.argumentsImportPath
                }
            );

        if (!!result.result) {
            args.SetResultWithInformation(
                result.result,
                S(GenerateAbstractProcessorFileMessages.AbstractProcessorGenerated)
                    .template(result.result.fileName).s
            );
        }

        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
