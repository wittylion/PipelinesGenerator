import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { MessageFilter } from "solid-pipelines";

export class GeneratePipeline extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GeneratePipeline();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getPipelineModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            model,
            args.pipelineNameSpecifiedByUser
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);

        let result = await GenerateFileFromTemplateExecutor.Instance.create(
            model,
            args.yeomanGenerator,
            {
                processors: args.processorsNames
            }
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
