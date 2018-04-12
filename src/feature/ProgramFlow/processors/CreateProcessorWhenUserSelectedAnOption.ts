import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { GenerateProcessorFileExecutor, GenerateProcessorFileArguments } from "../../GenerateProcessorFile";
import { ObtainOptionExecutor } from "../../ObtainOption";
import { GenerateArgumentsFileOptions } from "../../GenerateArgumentsFile/GenerateArgumentsFileOptions";
import S from "string";
import { GenerateAbstractProcessorFileOptions } from "../../GenerateAbstractProcessorFile/GenerateAbstractProcessorFileOptions";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { MessageType } from "solid-pipelines";

import fs = require("fs");

export class CreateProcessorWhenUserSelectedAnOption extends ProgramFlowProcessor {
    public static readonly Instance = new CreateProcessorWhenUserSelectedAnOption();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let model = args.modelsProvider.getProcessorModel();

        let processorGeneration = new GenerateProcessorFileArguments(
            model,
            args.yeomanGenerator
        );

        if (!fs.existsSync(
            args.yeomanGenerator.destinationPath(model.getSubdirectory()))) {
            model.subdirectories = [];
        }

        let result
            = await GenerateProcessorFileExecutor.Instance.execute(processorGeneration);

        let failMessages = processorGeneration.GetWarningsAndErrors();

        if (failMessages.length > 0) {
            args.AbortPipelineWithErrorMessage("Cannot create a processor");
        }
        else {
            args.AbortPipelineWithInformationMessage("Processor is created.");
        }

        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = args.selectedDesiredFlow === "createProcessor";
        return safeCondition;
    }
}
