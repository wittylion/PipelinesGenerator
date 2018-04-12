import { GenerateTypescriptPathProcessor } from "../GenerateTypescriptPathProcessor";
import { GenerateTypescriptPathArguments } from "../GenerateTypescriptPathArguments";

import upath = require("upath");
import { GenerateTypescriptPathMessages } from "../GenerateTypescriptPathMessages";
import S from "string";

export class FinalSeparatorsChange extends GenerateTypescriptPathProcessor {
    public static readonly Instance = new FinalSeparatorsChange();

    public async SafeExecute(args: GenerateTypescriptPathArguments): Promise<void> {
        let p = args.GetResult();
        let result = upath.toUnix(p);

        args.SetResultWithInformation(
            result,
            S(GenerateTypescriptPathMessages.ChangedSeparators)
                .template({ path: p, result: result }).s
        );
    }

    public SafeCondition(args: GenerateTypescriptPathArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPathArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
