import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { ResolveFileDependencyExecutor } from "../../../foundation/ResolveFileDependency";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

import upath from "upath";
import { GenerateProcessorFromScratchMessages } from "../GenerateProcessorFromScratchMessages";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";

@injectable()
export class EnsureAbstractProcessorData extends GenerateProcessorFromScratchProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        this.yeomanGenerator.log(GenerateProcessorFromScratchMessages.ProvideAbstractProcessor);

        let resolveResult = await ResolveFileDependencyExecutor.resolveFile(
            this.yeomanGenerator,
            "abstract-processor",
            "Processor.ts",
            this.yeomanGenerator.destinationPath(args.model.getSubdirectory())
        );

        let path = resolveResult.result;
        if (path) {
            let className = upath.trimExt(upath.basename(path));
            args.processorModel = new CreatedFileResult(path, {className: className});
        }

        args.AddMessageObjects(resolveResult.messages);
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.processorModel;
        return safeCondition;
    }
}
