import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";

export class EnsureSubdirectoriesAreSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureSubdirectoriesAreSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        args.fileModel.subdirectories = [];
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = args.fileModel.subdirectories === undefined;
        return safeCondition;
    }
}
