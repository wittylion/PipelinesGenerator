import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import upath = require("upath");
import { GenerateExecutorFileArguments, GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { InteractionModeEnum } from "../../EnsureFileModel/InteractionModeEnum";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";
import { PipelineExecutor } from "solid-pipelines";
import GENERATE_EXECUTOR_FILE from "../../GenerateExecutorFile/ServiceIdentifiers";

@injectable()
export class GenerateExecutor extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer,

        @inject(GENERATE_EXECUTOR_FILE.EXECUTOR)
        public executorGenerator: PipelineExecutor,


    ) {
        super();

    }


    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getExecutorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        model.destinationPath = await this.destination.ensure();
        let executorGeneration = new GenerateExecutorFileArguments(
            model,
            this.yeomanGenerator,
            args.generatorsProvider.getFileFromTemplateGenerator(),
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

        await this.executorGenerator.Execute(executorGeneration);

        args.generatedExecutor = executorGeneration.GetResult();
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
