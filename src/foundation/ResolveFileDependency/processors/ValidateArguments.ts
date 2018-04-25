import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";

export class ValidateArguments extends ResolveFileDependencyProcessor {
    public static readonly Instance = new ValidateArguments();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage("Yeoman generator must be passed to continue.");
            return;
        }
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
