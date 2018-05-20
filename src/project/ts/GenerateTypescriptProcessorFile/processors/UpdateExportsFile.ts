import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateExportsExecutor, GenerateExportsArguments } from "../../GenerateExports";

import path = require("path");
import { GenerateProcessorModel } from "../../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import GENERATE_EXPORTS from "../../GenerateExports/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");

@injectable()
export class UpdateExportsFile extends GenerateProcessorFileProcessor {
    constructor(
        @inject(YEOMAN.INSTANCE)
        public generator: Generator,

        @inject(GENERATE_EXPORTS.EXECUTOR)
        public exportAllFiles: PipelineExecutor

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        await this.exportAllFiles.Execute(new GenerateExportsArguments(
            this.generator,
            args.getFinalDirectoryDestination(),
            true,
            false,
            [ args.fileName ]
        )
        );
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
