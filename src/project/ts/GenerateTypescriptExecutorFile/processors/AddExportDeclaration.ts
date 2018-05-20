import { GenerateExecutorFileArguments } from "../../../../feature/GenerateExecutorFile";
import { GenerateExecutorFileProcessor } from "../../../../feature/GenerateExecutorFile/GenerateExecutorFileProcessor";
import { GenerateExportsExecutor, GenerateExportsArguments } from "../../GenerateExports";

import path = require("path");
import { inject, injectable } from "inversify";
import GENERATE_EXPORTS from "../../GenerateExports/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";
import "reflect-metadata"

@injectable()
export class AddExportDeclaration extends GenerateExecutorFileProcessor {

    constructor(

        @inject(GENERATE_EXPORTS.EXECUTOR)
        public exports: PipelineExecutor

    ) {
        super();

    }


    public async SafeExecute(args: GenerateExecutorFileArguments): Promise<void> {
        await this.exports.Execute( new GenerateExportsArguments(
            args.yeomanGenerator,
            args.fileModel.getFinalDirectoryDestination(),
            true,
            false,
            [args.fileModel.fileName]
        ));
    }

    public SafeCondition(args: GenerateExecutorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExecutorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
