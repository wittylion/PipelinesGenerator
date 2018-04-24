import { GenerateMessagesFileProcessor } from "../GenerateMessagesFileProcessor";
import { GenerateMessagesFileArguments } from "../GenerateMessagesFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export class GenerateMessagesFile extends GenerateMessagesFileProcessor {
    public static readonly Instance = new GenerateMessagesFile();

    public async SafeExecute(args: GenerateMessagesFileArguments): Promise<void> {
        let result 
            = await args.fileGenerator.create(
                args.fileModel,
                args.yeomanGenerator
            );

        args.SetResultWithInformation(result.result, "Messages file is created.");
        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateMessagesFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateMessagesFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
