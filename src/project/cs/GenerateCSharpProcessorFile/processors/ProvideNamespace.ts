import { GeneratePipelineFileArguments } from "../../../../feature/GeneratePipelineFile";
import { GeneratePipelineFileProcessor } from "../../../../feature/GeneratePipelineFile/GeneratePipelineFileProcessor";
import S from "string";
import { GetNamespaceFromFolderNamesExecutor } from "../../GetNamespaceFromFolderNames";
import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateProcessorModel } from "../../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

export class ProvideNamespace extends GenerateProcessorFileProcessor {
    public static readonly Instance = new ProvideNamespace();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        let res
            = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                args.destinationPath,
                true,
                undefined,
                args.subdirectories
            );

        args.options["namespace"] = res.result;
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = S(args.options["namespace"]).isEmpty();
        return safeCondition;
    }
}
