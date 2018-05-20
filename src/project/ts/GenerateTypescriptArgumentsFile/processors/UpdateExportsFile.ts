import { GenerateArgumentsFileProcessor } from "../../../../feature/GenerateArgumentsFile/GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../../../../feature/GenerateArgumentsFile";
import { GenerateExportsExecutor, GenerateExportsArguments } from "../../GenerateExports";

import path = require("path");
import { injectable, inject } from "inversify";
import "reflect-metadata"
import GENERATE_EXPORTS from "../../GenerateExports/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";

@injectable()
export class UpdateExportsFile extends GenerateArgumentsFileProcessor {

    constructor(

        @inject(GENERATE_EXPORTS.EXECUTOR)
        public exports: PipelineExecutor

    ) {
        super();

    }

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        await this.exports.Execute(new GenerateExportsArguments(
            args.yeomanGenerator,
            args.fileModel.getFinalDirectoryDestination(),
            true,
            false,
            [args.fileModel.fileName]
        ));
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
