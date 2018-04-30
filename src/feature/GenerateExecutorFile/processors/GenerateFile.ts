import { GenerateExecutorFileProcessor } from "../GenerateExecutorFileProcessor";
import { GenerateExecutorFileArguments } from "../GenerateExecutorFileArguments";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import { GenerateExecutorFileMessages } from "../GenerateExecutorFileMessages";
import S from "string";

export class GenerateFile extends GenerateExecutorFileProcessor {
    public static readonly Instance = new GenerateFile();

    public async SafeExecute(args: GenerateExecutorFileArguments): Promise<void> {
        let res
            = await args.fileGenerator.create(args.fileModel,
                {
                    argumentsClassName: args.argumentsClassName,
                    argumentsFileName: args.argumentsFileName,

                    pipelineClassName: args.pipelineClassName,
                    pipelineFileName: args.pipelineFileName
                });

        if (res.result) {
            let message: string
                = S(GenerateExecutorFileMessages.ExecutorSuccessfullyCreated)
                    .template({ name: res.result.options["className"] }).s;
            args.SetResultWithInformation(res.result, message);
        }
        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateExecutorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExecutorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
