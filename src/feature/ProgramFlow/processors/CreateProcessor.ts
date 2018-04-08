import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { GenerateProcessorFileExecutor, GenerateProcessorFileArguments } from "../../GenerateProcessorFile";
import { ObtainOptionExecutor } from "../../ObtainOption";
import { GenerateArgumentsFileOptions } from "../../GenerateArgumentsFile/GenerateArgumentsFileOptions";
import S from "string";
import { GenerateAbstractProcessorFileOptions } from "../../GenerateAbstractProcessorFile/GenerateAbstractProcessorFileOptions";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { MessageType } from "solid-pipelines";

export class CreateProcessor extends ProgramFlowProcessor {
    public static readonly Instance = new CreateProcessor();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let processorName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateProcessorFileOptions.PROCESSOR_NAME
        );

        if (S(processorName).isEmpty()) {
            return;
        }

        if (!<any>processorName) {
            return;
        }

        let model = args.commonFilesGeneratorArguments.modelsProvider.getProcessorModel();
        model.className = processorName;

        let processorGeneration = new GenerateProcessorFileArguments(
            model,
            args.yeomanGenerator
        );

        let argsName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateArgumentsFileOptions.ARGUMENTS_NAME
        );

        if (!S(argsName).isEmpty()) {
            processorGeneration.argumentsClassName = argsName;
            processorGeneration.argumentsFileName = argsName;
        }


        let abstractProcessorName = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateAbstractProcessorFileOptions.NAME
        );

        if (!S(abstractProcessorName).isEmpty()) {
            processorGeneration.abstractProcessorClassName = abstractProcessorName;
            processorGeneration.abstractProcessorFileName = abstractProcessorName;
        }

        let result
            = await GenerateProcessorFileExecutor.Instance.execute(processorGeneration);

        let failMessages = result.messages.filter(
            x => x.MessageType == MessageType.Error
                || x.MessageType == MessageType.Warning
        );

        if (failMessages.length > 0) {
            args.AbortPipelineWithErrorMessage("Cannot create a processor");
            result.messages.forEach(x => args.AddMessageObject(x));
        }
        else {
            args.AbortPipelineWithInformationMessage("Processor is created.");
        }
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
