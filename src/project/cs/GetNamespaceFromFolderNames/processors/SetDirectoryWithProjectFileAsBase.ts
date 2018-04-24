import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";
import S from "string";
import path = require("path");

export class SetDirectoryWithProjectFileAsBase extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new SetDirectoryWithProjectFileAsBase();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let projectDirPath = path.dirname(args.projectDirectory);
        let projectDirName = path.basename(projectDirPath);
        let relativePath = path.relative(projectDirPath, args.destinationPath);

        let directories = relativePath
            .split("\\")
            .filter(x => !x.startsWith(".") && !x.startsWith(".."));

        args.directories = [projectDirName, ...directories, ...args.directories];
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = !S(args.projectDirectory).isEmpty() && args.shouldFindProjectDirectory;
        return safeCondition;
    }
}
