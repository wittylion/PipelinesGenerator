import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import upath = require("upath");
import { GenerateExecutorFileArguments, GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { InteractionModeEnum } from "../../EnsureFileModel/InteractionModeEnum";

export class GenerateExecutor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateExecutor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getExecutorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        let executorGeneration = new GenerateExecutorFileArguments(
            model,
            args.yeomanGenerator,
            args.pipelineNameSpecifiedByUser,
            InteractionModeEnum.Minimum
        );

        if (!S(args.generatedArguments.options["className"]).isEmpty()) {
            executorGeneration.argumentsClassName = args.generatedArguments.options["className"];
        }
        else {
            args.AddWarning("Cannot obtain arguments class name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedArguments.fileName).isEmpty()) {
            executorGeneration.argumentsFileName
                = upath.trimExt(upath.basename(args.generatedArguments.fileName));
        }
        else {
            args.AddWarning("Cannot obtain arguments file name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedPipeline.options["className"]).isEmpty()) {
            executorGeneration.pipelineClassName = args.generatedPipeline.options["className"];
        }
        else {
            args.AddWarning("Cannot obtain pipeline class name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedPipeline.fileName).isEmpty()) {
            executorGeneration.pipelineFileName
                = upath.trimExt(upath.basename(args.generatedPipeline.fileName));
        }
        else {
            args.AddWarning("Cannot obtain pipeline file name during the 'Pipeline executor' creation.");
        }

        let result = await args.generatorsProvider.getExecutorGenerator().execute(executorGeneration);

        args.generatedExecutor = result.result;
        args.AddMessageObjects(executorGeneration.GetAllMessages());
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
