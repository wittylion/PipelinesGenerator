import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import { EnsureOptionExecutor } from "../../EnsureOption";
import S from "string";
import { InteractionModeEnum } from "../InteractionModeEnum";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";

export class EnsureClassNameIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureClassNameIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        if (args.interactionMode == InteractionModeEnum.Minimum && !S(args.possibleName).isEmpty()) {
            args.fileModel.className = args.possibleName;
            return;
        }

        args.fileModel.className = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            `name`,
            InputTypeEnum.Input,
            false,
            false,
            !args.possibleName ? null : path.basename(args.possibleName)
        );
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = S(args.fileModel.className).isEmpty();
        return safeCondition;
    }
}
