import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import { GenerateArgumentsResult } from "../models/GenerateArgumentsResult";

export class GenerateArgumentsFile extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new GenerateArgumentsFile();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        let res = await GenerateFileFromTemplateExecutor.Instance.create(
            args.fileModel,
            args.yeomanGenerator,
            {
                argumentsMemebers: args.members
            }
        );

        args.result = new GenerateArgumentsResult();
        args.result.creationResult = res["0"];
        let messages = res["1"];
        messages.forEach(x => args.AddMessageObject(x));
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
