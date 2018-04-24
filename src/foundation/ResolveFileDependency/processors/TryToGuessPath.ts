import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";

import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";
import { FindFileExecutor } from "../../FindFile";

export class TryToGuessPath extends ResolveFileDependencyProcessor {
    public static readonly Instance = new TryToGuessPath();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {

        if (S(args.fileNamePattern).isEmpty()) {
            args.AbortPipelineWithErrorMessage(ResolveFileDependencyMessages.PatternToFindIsEmpty);
            return;
        }
        
        let result = await FindFileExecutor.findFiles(
            args.fromDirectory,
            args.fileNamePattern,
        )[0];

        args.guesses.push(result);
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
