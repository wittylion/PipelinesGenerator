import S from "string";
import { GenerateFileFromTemplateProcessor } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateArguments";
import { GetNamespaceFromFolderNamesExecutor, GetNamespaceFromFolderNamesArguments } from "../../GetNamespaceFromFolderNames";
import "reflect-metadata"
import { injectable, inject } from "inversify";
import GET_NAMESPACE from "../../GetNamespaceFromFolderNames/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";

@injectable()
export class AddNameSpaceToOptions extends GenerateFileFromTemplateProcessor {

    constructor(

        @inject(GET_NAMESPACE.EXECUTOR)
        private getNamespace: PipelineExecutor

    ) {
        super();

    }

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        let getNamespaceArgs = new GetNamespaceFromFolderNamesArguments(
            args.fileModel.destinationPath,
            true,
            undefined,
            args.fileModel.subdirectories);

        await this.getNamespace.Execute(getNamespaceArgs);

        args.fileModel.options["namespace"] = getNamespaceArgs.GetResult();
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = S(args.fileModel.options["namespace"]).isEmpty();
        return safeCondition;
    }
}
