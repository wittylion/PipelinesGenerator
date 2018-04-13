import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";

import findUp from 'find-up'
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";

export class TryToGuessPath extends ResolveFileDependencyProcessor {
    public static readonly Instance = new TryToGuessPath();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {

        if (S(args.fileNamePattern).isEmpty()) {
            args.AbortPipelineWithErrorMessage(ResolveFileDependencyMessages.PatternToFindIsEmpty);
            return;
        }
        
        let result = await findUp(
            args.fileNamePattern,
            {
                cwd: args.fromDirectory
            }
        );

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
