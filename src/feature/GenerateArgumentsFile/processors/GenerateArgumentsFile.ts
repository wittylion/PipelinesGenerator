import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import { GenerateArgumentsFileMessages } from "../GenerateArgumentsFileMessages";
import S from "string";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class GenerateArgumentsFile extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new GenerateArgumentsFile();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        let res = await args.fileGenerator.create(
            args.fileModel,
            {
                argumentsMemebers: args.members
            }
        );

        if (res.result) {
            let message = S(
                GenerateArgumentsFileMessages.ArgumentsWereSuccessfullyGenerated
            ).template({ name: res.result.fileName }).s;

            args.SetResultWithInformation(res.result, message);
        }

        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
