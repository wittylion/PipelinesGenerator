import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";

import path = require("upath");
import S from "string";

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
        let safeCondition = S(args.projectDirectory).isEmpty();
        return safeCondition;
    }
}
