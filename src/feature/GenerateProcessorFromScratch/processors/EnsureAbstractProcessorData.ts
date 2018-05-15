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
import { PipelineRunner, PipelineExecutor } from "solid-pipelines";

@injectable()
export class EnsureAbstractProcessorData extends GenerateProcessorFromScratchProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(RESOLVE_FILE_DEPENDENCY.EXECUTOR)
        private fileDependencyResolver: PipelineExecutor,

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        this.yeomanGenerator.log(GenerateProcessorFromScratchMessages.ProvideAbstractProcessor);

        let resolveArgs = new ResolveFileDependencyArguments(
            this.yeomanGenerator,
            "abstract-processor",
            "Processor.ts",
            this.yeomanGenerator.destinationPath(args.model.getSubdirectory()));
        await this.fileDependencyResolver.Execute(resolveArgs);

        let path = resolveArgs.GetResult();
        if (path) {
            let className = upath.trimExt(upath.basename(path));
            args.processorModel = new CreatedFileResult(path, {className: className});
        }
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.processorModel;
        return safeCondition;
    }
}
