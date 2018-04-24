import S from "string";
import { GenerateFileFromTemplateProcessor } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateArguments";
import { GetNamespaceFromFolderNamesExecutor } from "../../GetNamespaceFromFolderNames";

export class AddNameSpaceToOptions extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new AddNameSpaceToOptions();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        let res
            = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                args.yeomanGenerator.destinationPath(),
                true,
                args.yeomanGenerator.destinationPath(args.fileModel.getFinalPath())
            );

        args.fileModel.options["namespace"] = res.result;
        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = S(args.fileModel.options["namespace"]).isEmpty();
        return safeCondition;
    }
}
