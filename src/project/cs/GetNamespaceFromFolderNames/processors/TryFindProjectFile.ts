import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";

import findUp = require("find-up");
import path = require("path");
import S from "string";

export class TryFindProjectFile extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new TryFindProjectFile();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        args.projectDirectory = await findUp(
            "packages.config",
            {cwd: args.destinationPath}
        );
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = S(args.projectDirectory).isEmpty() && args.shouldFindProjectDirectory;
        return safeCondition;
    }
}
