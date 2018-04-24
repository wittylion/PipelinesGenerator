import { GeneratePipelineFileArguments } from "../../../../feature/GeneratePipelineFile";
import { GeneratePipelineFileProcessor } from "../../../../feature/GeneratePipelineFile/GeneratePipelineFileProcessor";
import S from "string";
import { GetNamespaceFromFolderNamesExecutor } from "../../GetNamespaceFromFolderNames";

export class ProvideNamespace extends GeneratePipelineFileProcessor {
    public static readonly Instance = new ProvideNamespace();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        let res
            = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                args.yeomanGenerator.destinationPath(),
                true,
                args.yeomanGenerator.destinationPath(args.fileModel.getFinalPath())
            );

        args.fileModel.options["namespace"] = res.result;
        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = S(args.fileModel.options["namespace"]).isEmpty();
        return safeCondition;
    }
}
