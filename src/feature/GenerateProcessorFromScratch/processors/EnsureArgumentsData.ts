import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { ResolveFileDependencyExecutor, ResolveFileDependencyArguments } from "../../../foundation/ResolveFileDependency";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

import upath from "upath";
import { GenerateProcessorFromScratchMessages } from "../GenerateProcessorFromScratchMessages";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import RESOLVE_FILE_DEPENDENCY from "../../../foundation/ResolveFileDependency/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";

@injectable()
export class EnsureArgumentsData extends GenerateProcessorFromScratchProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(RESOLVE_FILE_DEPENDENCY.EXECUTOR)
        private fileDependencyResolver: PipelineExecutor,

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        this.yeomanGenerator.log(GenerateProcessorFromScratchMessages.ProvideArguments);

        let resolverArgs = new ResolveFileDependencyArguments(
            this.yeomanGenerator,
            "arguments",
            args.model.getFinalName().replace("Processor", "Arguments"),
            this.yeomanGenerator.destinationPath(args.model.getSubdirectory()));
        await this.fileDependencyResolver.Execute(resolverArgs);

        let path = resolverArgs.GetResult();
        if (path) {
            let className = upath.trimExt(upath.basename(path));
            args.argumentsModel = new CreatedFileResult(path, { className : className });
        }
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.argumentsModel;
        return safeCondition;
    }
}
