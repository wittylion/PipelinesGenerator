import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

import fs = require("fs");
import S = require("string");

export class ValidateTemplateDestination extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new ValidateTemplateDestination();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        await new Promise((resolve) => {
            this.CustomExecution(args);
            resolve();
        });
    }

    public CustomExecution(args: GenerateTypescriptPipelineArguments): void {
        if (S(args.templateDestination).isEmpty()) {
            if (S(args.templateFileName).isEmpty()) {
                args.AbortPipelineWithErrorMessage("We couldn't find a pipeline template. You have to provide a templpate file name, so we can create a pipeline from this file.");
            }
            else {
                args.AbortPipelineWithErrorMessage("Something went wrong and we couldn't find a template directory or file in it. Please contact developers if you see this message.");
            }

            return;
        }

        if (!fs.existsSync(args.templateDestination)) {
            args.AbortPipelineWithErrorMessage("The file in '" + args.templateDestination + "' templpate destination was not found. Please ensure the existence of the file and try again.");
            return;
        }
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
