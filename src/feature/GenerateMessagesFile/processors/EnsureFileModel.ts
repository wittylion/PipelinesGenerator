import { GenerateMessagesFileProcessor } from "../GenerateMessagesFileProcessor";
import { GenerateMessagesFileArguments } from "../GenerateMessagesFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";

export class EnsureFileModel extends GenerateMessagesFileProcessor {
    public static readonly Instance = new EnsureFileModel();

    public async SafeExecute(args: GenerateMessagesFileArguments): Promise<void> {
        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            args.fileModel,
            args.possibleName,
            args.possibleExtension,
            undefined,
            args.interactionMode
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);
    }

    public SafeCondition(args: GenerateMessagesFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateMessagesFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
