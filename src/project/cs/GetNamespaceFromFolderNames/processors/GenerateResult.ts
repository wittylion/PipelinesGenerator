import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";


export class GenerateResult extends GetNamespaceFromFolderNamesProcessor {
    public static readonly Instance = new GenerateResult();

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        args.SetResultWithInformation(args.directories.join("."), "Namespace is specified.");
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = args.directories.length > 0;
        return safeCondition;
    }
}
