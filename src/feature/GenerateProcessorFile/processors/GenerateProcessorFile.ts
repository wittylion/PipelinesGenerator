import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateProcessorFile extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateProcessorFile();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let res =
            await GenerateFileFromTemplateExecutor.Instance.create(
                args.fileModel,
                args.yeomanGenerator,
                {
                    argumentsClassName: args.arguments.className,
                    argumentsFileName: args.argumentsImportStatement,

                    abstractProcessorClassName: args.abstractProcessor.className,
                    abstractProcessorFileName: args.processorImportStatement,
                }
            );

        if (res.result) {
            args.AddInformation(`File '${res.result.fileName}' was created.`);
            return;
        }
        else {
            if (res.messages.length > 0) {
                res.messages.forEach(x => args.AddMessageObject(x));
            }
            else {
                args.AddError(`Processor with name '${args.fileModel.className}' was not created.`);
            }
        }
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
