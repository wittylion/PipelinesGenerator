import { GeneratePipelineFileArguments } from "../../../../feature/GeneratePipelineFile";
import { GeneratePipelineFileProcessor } from "../../../../feature/GeneratePipelineFile/GeneratePipelineFileProcessor";
import S from "string";
import { GetNamespaceFromFolderNamesExecutor } from "../../GetNamespaceFromFolderNames";
import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../../../../feature/GenerateProcessorFile";

export class ProvideNamespace extends GenerateProcessorFileProcessor {
    public static readonly Instance = new ProvideNamespace();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let res
            = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                args.yeomanGenerator.destinationPath(),
                false,
                args.yeomanGenerator.destinationPath(args.fileModel.getFinalPath())
            );

        args.fileModel.options["namespace"] = res.result;
        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = S(args.fileModel.options["namespace"]).isEmpty();
        return safeCondition;
    }
}
