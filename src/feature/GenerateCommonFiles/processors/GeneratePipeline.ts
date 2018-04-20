import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { MessageFilter } from "solid-pipelines";
import { GeneratePipelineFileExecutor } from "../../GeneratePipelineFile";

export class GeneratePipeline extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GeneratePipeline();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getPipelineModel();
        model.fileName = args.pipelineNameSpecifiedByUser;
        model.options["className"] = args.pipelineNameSpecifiedByUser;
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        let result = await args.generatorsProvider.getPipelineGenerator().create(
            model,
            args.yeomanGenerator,
            args.generatedProcessors,
            args.generatedProcessor
        );

        args.generatedPipeline = result.result;
        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
