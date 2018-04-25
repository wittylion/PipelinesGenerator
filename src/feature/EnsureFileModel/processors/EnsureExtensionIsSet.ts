import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import S from "string";
import { InteractionModeEnum } from "../InteractionModeEnum";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";

import path = require("path");

export class EnsureExtensionIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureExtensionIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        args.fileModel.extension = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            `extension`,
            InputTypeEnum.Input,
            false,
            false,
            path.basename(args.yeomanGenerator.destinationRoot())
        );
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = S(args.fileModel.extension).isEmpty();
        return safeCondition;
    }
}
