import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";
import S from "string";
import path = require("upath");

export class SetDirectoryWithProjectFileAsBase extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new SetDirectoryWithProjectFileAsBase();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let projectDirPath = args.projectDirectory;
        let projectDirName = path.basename(projectDirPath);
        let relativePath = path.relative(projectDirPath, args.destinationPath);

        let directories = relativePath
            .split(path.sep)
            .filter(
                directory =>
                    !directory.startsWith(".")
                    && !directory.startsWith("..")
                    && !S(directory).isEmpty()
                );

        args.directories = [projectDirName, ...directories, ...args.directories];
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = !S(args.projectDirectory).isEmpty();
        return safeCondition;
    }
}
