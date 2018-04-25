import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import { EnsureOptionExecutor } from "../../EnsureOption";

export class AskForSubfolderCreation extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new AskForSubfolderCreation();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        args.createSubfolderWithPipelineName =
            S(
                await EnsureOptionExecutor.obtainByKey(
                    args.yeomanGenerator,
                    "subfolder",
                    InputTypeEnum.Confirm,
                    false,
                    false,
                    false
                )
            ).toBoolean();
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.createSubfolderWithPipelineName === undefined;
        return safeCondition;
    }
}
