import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";
import S from "string";
import path = require("upath");

export class AddSubdirectoriesToNamespaceName extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new AddSubdirectoriesToNamespaceName();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let directories = path.dirname(path.relative(args.destinationPath, args.filePath))
            .split(path.sep)
            .filter(x => !x.startsWith(".") && !x.startsWith(".."));

        args.directories = [...args.directories, ...directories];
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = !S(args.filePath).isEmpty();
        return safeCondition;
    }
}
