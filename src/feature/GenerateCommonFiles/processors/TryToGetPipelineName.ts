import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../EnsureOption/InputTypeEnum";
import path = require("path");

export class TryToGetPipelineName extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new TryToGetPipelineName();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        args.pipelineNameSpecifiedByUser = 
            await EnsureOptionExecutor.obtainByKey(
                args.yeomanGenerator, 
                "pipelineName",
                InputTypeEnum.Input,
                false,
                false,
                path.basename(args.yeomanGenerator.destinationRoot())
            );
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = S(args.pipelineNameSpecifiedByUser).isEmpty();
        return safeCondition;
    }
}
