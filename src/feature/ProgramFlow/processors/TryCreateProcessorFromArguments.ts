import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { ObtainOptionExecutor } from "../../ObtainOption";
import { GenerateArgumentsFileOptions } from "../../GenerateArgumentsFile/GenerateArgumentsFileOptions";
import S from "string";
import { GenerateAbstractProcessorFileOptions } from "../../GenerateAbstractProcessorFile/GenerateAbstractProcessorFileOptions";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { MessageType } from "solid-pipelines";

import fs = require("fs");
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

export class TryCreateProcessorFromArguments extends ProgramFlowProcessor {
    public static readonly Instance = new TryCreateProcessorFromArguments();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let processorName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateProcessorFileOptions.PROCESSOR_NAME
        );

        if (S(processorName).isEmpty() && !<any>processorName) {
            return;
        }

        let model = args.modelsProvider.getProcessorModel();
        model.options["className"] = processorName;

        let processorGeneration = model;

        let argsName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateArgumentsFileOptions.ARGUMENTS_NAME
        );

        if (!S(argsName).isEmpty()) {
            processorGeneration.arguments
                = new CreatedFileResult(argsName, model.options);
        }


        let abstractProcessorName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateAbstractProcessorFileOptions.NAME
        );

        if (!S(abstractProcessorName).isEmpty()) {
            processorGeneration.abstractProcessor
                = new CreatedFileResult(abstractProcessorName, model.options);
        }

        if (!fs.existsSync(
            args.yeomanGenerator.destinationPath(model.getSubdirectory()))) {
            model.subdirectories = [];
        }

        await args.generatorsProvider.getProcessorGenerator().execute(processorGeneration);
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
