import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import S from "string";
import { InteractionModeEnum } from "../InteractionModeEnum";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../EnsureOption/InputTypeEnum";

export class EnsureFileNameIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureFileNameIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        if (args.interactionMode == InteractionModeEnum.Maximum) {
            EnsureOptionExecutor.Instance.obtainByKey(
                args.yeomanGenerator,
                `fileName`,
                InputTypeEnum.Input,
                false,
                false,
                args.fileModel.className
            );
        }
        else {
            args.fileModel.fileName = args.fileModel.className;
        }
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = S(args.fileModel.fileName).isEmpty();
        return safeCondition;
    }
}
