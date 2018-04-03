import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import { InteractionModeEnum } from "../InteractionModeEnum";

export class SetDefaultModeToMinimum extends EnsureFileModelProcessor {
    public static readonly Instance = new SetDefaultModeToMinimum();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        args.interactionMode = InteractionModeEnum.Minimum;
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = args.interactionMode === undefined;
        return safeCondition;
    }
}
