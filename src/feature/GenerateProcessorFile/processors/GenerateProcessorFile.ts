import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateProcessorFile extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateProcessorFile();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let options = {};

        if (args.arguments) {
            _.assign(
                options,
                {
                    argumentsClassName: args.arguments.options["className"],
                }
            );
        } else {
            _.assign(
                options,
                {
                    argumentsClassName: "MyArguments",
                    argumentsFileName: "../MyArguments",
                }
            );
        }

        if (args.abstractProcessor) {
            _.assign(
                options,
                {
                    abstractProcessorClassName: args.abstractProcessor.options["className"],
                }
            );
        } else {
            _.assign(
                options,
                {
                    abstractProcessorClassName: "MyProcessor",
                    abstractProcessorFileName: "../MyProcessor",
                }
            );
        }

        let res =
            await GenerateFileFromTemplateExecutor.Instance.create(
                args.fileModel,
                args.yeomanGenerator,
                options
            );

        if (res.result) {
            args.SetResultWithInformation(res.result, `File '${res.result.fileName}' was created.`);
            return;
        }
        else {
            if (res.messages.length > 0) {
                res.messages.forEach(x => args.AddMessageObject(x));
            }
            else {
                args.AddError(`Processor with name '${args.fileModel.options["className"]}' was not created.`);
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
