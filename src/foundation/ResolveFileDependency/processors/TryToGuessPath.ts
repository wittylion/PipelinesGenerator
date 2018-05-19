import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";

import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";
import { FindFileExecutor, FindFileArguments } from "../../FindFile";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import FIND_FILE from "../../FindFile/ServiceIdentifiers";

@injectable()
export class TryToGuessPath extends ResolveFileDependencyProcessor {

    constructor(

        @inject(FIND_FILE.EXECUTOR)
        public findFile: FindFileExecutor

    ) {
        super();
    }

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {

        if (S(args.fileNamePattern).isEmpty()) {
            args.AbortPipelineWithErrorMessage(ResolveFileDependencyMessages.PatternToFindIsEmpty);
            return;
        }

        let findFileArguments = new FindFileArguments(args.fromDirectory, args.fileNamePattern)

        let result = await this.findFile.Execute(findFileArguments);

        if (findFileArguments.files.length > 0) {
            args.guesses.push(result[0]);
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
