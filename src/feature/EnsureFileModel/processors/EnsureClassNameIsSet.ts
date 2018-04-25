import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import { EnsureOptionExecutor } from "../../EnsureOption";
import S from "string";
import { InteractionModeEnum } from "../InteractionModeEnum";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";

import path = require("path");

export class EnsureClassNameIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureClassNameIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        if (args.interactionMode == InteractionModeEnum.Minimum && !S(args.possibleName).isEmpty()) {
            args.fileModel.options["className"] = args.possibleName;
            return;
        }

        args.fileModel.options["className"] = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            !args.possibleOption ? `name` : args.possibleOption,
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
        let safeCondition = S(args.fileModel.options["className"]).isEmpty();
        return safeCondition;
    }
}
