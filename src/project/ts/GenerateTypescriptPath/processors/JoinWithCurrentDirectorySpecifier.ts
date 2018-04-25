import { GenerateTypescriptPathProcessor } from "../GenerateTypescriptPathProcessor";
import { GenerateTypescriptPathArguments } from "../GenerateTypescriptPathArguments";
import S from "string";
import upath = require("upath");
import { GenerateTypescriptPathMessages } from "../GenerateTypescriptPathMessages";

export class JoinWithCurrentDirectorySpecifier extends GenerateTypescriptPathProcessor {
    public static readonly Instance = new JoinWithCurrentDirectorySpecifier();

    public async SafeExecute(args: GenerateTypescriptPathArguments): Promise<void> {
        let p = args.GetResult();
        let result = upath.joinSafe("./", p);

        args.SetResultWithInformation(
            result,
            S(GenerateTypescriptPathMessages.AddedRelativePathFromCurrentDirectory)
                .template({ path: p, result: result }).s
        );
    }

    public SafeCondition(args: GenerateTypescriptPathArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPathArguments): boolean {
        let safeCondition = !args.GetResult().startsWith('.');
        return safeCondition;
    }
}
