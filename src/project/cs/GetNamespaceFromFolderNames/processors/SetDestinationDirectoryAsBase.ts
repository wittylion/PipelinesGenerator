import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";

import path = require("path");

export class SetDestinationDirectoryAsBase extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new SetDestinationDirectoryAsBase();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let p = path.basename(args.destinationPath);

        args.directories = [p, ...args.directories]
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = !args.shouldFindProjectDirectory;
        return safeCondition;
    }
}
