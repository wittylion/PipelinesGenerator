import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../EnsureOption/InputTypeEnum";
import path = require("path");
import { GenerateFileModel } from "../GenerateFileModel";

export class TryToGetProcessors extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new TryToGetProcessors();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let defaultValue =
            S(args.pipelineNameSpecifiedByUser).isEmpty()
                ? path.basename(args.yeomanGenerator.destinationRoot())
                : S(args.pipelineNameSpecifiedByUser).chompRight("Pipeline").s;

        let processorNames =
            await EnsureOptionExecutor.obtainByKey(
                args.yeomanGenerator,
                "processorNames",
                InputTypeEnum.Input,
                false,
                false,
                defaultValue
            );

        args.processorsNames = S(processorNames).isEmpty() ? [] : processorNames.split(' ');
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.length < 1;
        return safeCondition;
    }
}
