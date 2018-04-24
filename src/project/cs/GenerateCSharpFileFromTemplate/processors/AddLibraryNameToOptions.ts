import S from "string";
import { GenerateFileFromTemplateProcessor } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateArguments";
import { GetNamespaceFromFolderNamesExecutor } from "../../GetNamespaceFromFolderNames";

export class AddLibraryNameToOptions extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new AddLibraryNameToOptions();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        let namespace: string = args.fileModel.options["namespace"];
        let indexOfDot = namespace.indexOf('.');
        let length = indexOfDot == -1 ? namespace.length : indexOfDot;

        args.fileModel.options["library"] = namespace.substr(0, length);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = !S(args.fileModel.options["namespace"]).isEmpty()
            && S(args.fileModel.options["library"]).isEmpty();
        return safeCondition;
    }
}
