import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";
import S from "string";

export class SetDirectoryWithProjectFileAsBase extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new SetDirectoryWithProjectFileAsBase();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let directories = path.relative(args.projectDirectory, args.destinationPath)
            .split("\\")
            .filter(x => !x.startsWith(".") && !x.startsWith(".."));

        args.directories = [...directories, args.directories];
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = !S(args.projectDirectory).isEmpty() && args.shouldFindProjectDirectory;
        return safeCondition;
    }
}
