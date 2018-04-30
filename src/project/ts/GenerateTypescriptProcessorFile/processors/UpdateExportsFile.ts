import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateExportsExecutor } from "../../GenerateExports";

import path = require("path");
import { GenerateProcessorModel } from "../../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

export class UpdateExportsFile extends GenerateProcessorFileProcessor {
    constructor(public exportAllFiles: (processorModel: GenerateProcessorModel) => Promise<void>) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        await this.exportAllFiles(args);
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
