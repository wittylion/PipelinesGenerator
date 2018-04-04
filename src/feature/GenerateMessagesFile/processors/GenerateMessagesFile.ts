import { GenerateMessagesFileProcessor } from "../GenerateMessagesFileProcessor";
import { GenerateMessagesFileArguments } from "../GenerateMessagesFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export class GenerateMessagesFile extends GenerateMessagesFileProcessor {
    public static readonly Instance = new GenerateMessagesFile();

    public async SafeExecute(args: GenerateMessagesFileArguments): Promise<void> {
        let mainExportsGeneration = new GenerateFileFromTemplateArguments();

        mainExportsGeneration.fileModel = args.fileModel;
        mainExportsGeneration.yeomanGenerator = args.yeomanGenerator;

        await GenerateFileFromTemplateExecutor.Instance.execute(mainExportsGeneration);
    }

    public SafeCondition(args: GenerateMessagesFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateMessagesFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
