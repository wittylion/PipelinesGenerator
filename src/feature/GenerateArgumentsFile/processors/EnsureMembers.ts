import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { EnsureOptionExecutor } from "../../EnsureOption";
import S from "string";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";

export class EnsureMembers extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new EnsureMembers();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {

        let answer: string = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            `argumentsMembers`,
            InputTypeEnum.Input,
            false,
            false
        );

        if (S(answer).isEmpty() || !<any>answer) {
            return;
        }

        args.members = answer.toString().split(' ');
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
