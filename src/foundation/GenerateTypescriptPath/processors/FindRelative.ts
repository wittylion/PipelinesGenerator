import { GenerateTypescriptPathProcessor } from "../GenerateTypescriptPathProcessor";
import { GenerateTypescriptPathArguments } from "../GenerateTypescriptPathArguments";

import path = require("path");
import { GenerateTypescriptPathMessages } from "../GenerateTypescriptPathMessages";
import S from "string";

export class FindRelative extends GenerateTypescriptPathProcessor {
    public static readonly Instance = new FindRelative();

    public async SafeExecute(args: GenerateTypescriptPathArguments): Promise<void> {
        let p = path.relative(args.fromPath, args.toPath);

        args.SetResultWithInformation(
            p,
            S(GenerateTypescriptPathMessages.RelativePathSet)
                .template({ from: args.fromPath, to: args.toPath, result: p }).s
        );
    }

    public SafeCondition(args: GenerateTypescriptPathArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPathArguments): boolean {
        let safeCondition = !S(args.fromPath).isEmpty() && !S(args.toPath).isEmpty();
        return safeCondition;
    }
}
