import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../EnsureOption/InputTypeEnum";
import S from "string";
import { InteractionModeEnum } from "../InteractionModeEnum";

export class EnsureClassNameIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureClassNameIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {

        if (args.interactionMode == InteractionModeEnum.Maximum) {
            args.fileModel.className = await EnsureOptionExecutor.Instance.obtainByKey(
                args.yeomanGenerator,
                `className`,
                InputTypeEnum.Input,
                false,
                false,
                path.basename(args.possibleName)
            );
        }
        else {
            args.fileModel.className = args.possibleName;
        }
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = S(args.fileModel.className).isEmpty();
        return safeCondition;
    }
}
