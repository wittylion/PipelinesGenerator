import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import { EnsureFileModelExecutor, EnsureFileModelArguments } from "../../EnsureFileModel";

export class GenerateArguments extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateArguments();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getArgumentsModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for arguments generation.");
            return;
        }

        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            model,
            args.pipelineNameSpecifiedByUser,
            args.extension
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);

        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        let argumentsGeneration = new GenerateFileFromTemplateArguments();

        argumentsGeneration.yeomanGenerator = args.yeomanGenerator;
        argumentsGeneration.fileModel = model;
        argumentsGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(argumentsGeneration);

        args.generatedArgumentsClassName = argumentsGeneration.fileModel.className;
        args.generatedArgumentsFileName = argumentsGeneration.fileModel.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
