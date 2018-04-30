import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";

export class GenerateProcessorFile extends GenerateProcessorFileProcessor {
    constructor(public fileGenerator: (processor: GenerateProcessorModel) => Promise<void>) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        await this.fileGenerator(args);
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
