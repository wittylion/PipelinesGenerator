import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { EnsureOptionExecutor } from "../../EnsureOption";
import { InputTypeEnum } from "../../EnsureOption/InputTypeEnum";
import S from "string";

export class DefineWhetherShouldAskMembers extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new DefineWhetherShouldAskMembers();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {

        let answer = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            `createArgumentsMembers`,
            InputTypeEnum.Confirm,
            false,
            false,
            false
        );

        args.askForMembers = S(answer).toBoolean();
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = args.askForMembers === undefined;
        return safeCondition;
    }
}
