import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import { GenerateFile } from "../../GenerateFileFromTemplate/Types";
import GENERATE_FILE_FROM_TEMPLATE from "../../GenerateFileFromTemplate/ServiceIdentifiers";

@injectable()
export class GenerateProcessorFile extends GenerateProcessorFileProcessor {
    constructor(

        @inject(GENERATE_FILE_FROM_TEMPLATE.EXECUTOR)
        private generator: GenerateFileFromTemplateExecutor

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        await this.generator.Execute(new GenerateFileFromTemplateArguments(args));
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
