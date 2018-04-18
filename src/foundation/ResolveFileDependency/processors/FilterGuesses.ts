import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import S from "string";

export class FilterGuesses extends ResolveFileDependencyProcessor {
    public static readonly Instance = new FilterGuesses();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        args.guesses = args.guesses.filter(guess => !S(guess).isEmpty());
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = args.guesses.length > 0;
        return safeCondition;
    }
}
