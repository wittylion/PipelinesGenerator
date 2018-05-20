import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import { EnsureFileModelExecutor, EnsureFileModelArguments } from "../../EnsureFileModel";
import { GenerateArgumentsFileArguments, GenerateArgumentsFileExecutor } from "../../GenerateArgumentsFile";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";
import { PipelineExecutor } from "solid-pipelines";
import GENERATE_ARGUMENTS_FILE from "../../GenerateArgumentsFile/ServiceIdentifiers";

@injectable()
export class GenerateArguments extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer,

        @inject(GENERATE_ARGUMENTS_FILE.EXECUTOR)
        public argumentsGenerator: PipelineExecutor,

    ) {
        super();

    }


    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getArgumentsModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for arguments generation.");
            return;
        }

        model.destinationPath = await this.destination.ensure();
        model.subdirectories = [
            ...args.commonSubfolders,
            ...model.subdirectories
        ];
        let argumentsGeneration = GenerateArgumentsFileArguments.Create(
            model,
            this.yeomanGenerator,
            args.generatorsProvider.getFileFromTemplateGenerator(),
            args.pipelineNameSpecifiedByUser
        );

        await this.argumentsGenerator.Execute(argumentsGeneration);

        args.generatedArguments = argumentsGeneration.GetResult();
        args.AddMessageObjects(argumentsGeneration.GetAllMessages());
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
