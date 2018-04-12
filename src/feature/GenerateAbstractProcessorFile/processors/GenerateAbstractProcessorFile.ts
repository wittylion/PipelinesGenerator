import { GenerateAbstractProcessorFileProcessor } from "../GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../GenerateAbstractProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import { GenerateAbstractProcessorFileMessages } from "../GenerateAbstractProcessorFileMessages";
import S from "string";

export class GenerateAbstractProcessorFile extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new GenerateAbstractProcessorFile();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {
        let result
            = await GenerateFileFromTemplateExecutor.Instance.create(
                args.fileModel,
                args.yeomanGenerator,
                {
                    argumentsClassName: args.argumentsClassName,
                    argumentsFileName: args.argumentsFileName
                }
            );

        if (!!result.result) { 
            args.SetResultWithInformation(
                result.result, 
                S(GenerateAbstractProcessorFileMessages.AbstractProcessorGenerated)
                    .template(result.result.className).s
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
