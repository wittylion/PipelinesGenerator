import { GenerateAbstractProcessorFileProcessor } from "../GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../GenerateAbstractProcessorFileArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../EnsureOption";

export class EnsureArgumentsFileName extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new EnsureArgumentsFileName();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {
        let answer = await EnsureOptionExecutor.Instance.obtainByKey(
            args.yeomanGenerator,
            "argumentsName"
        );

        args.argumentsClassName = answer;
        args.argumentsFileName = answer;
    }

    public SafeCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        let safeCondition = S(args.argumentsFileName).isEmpty();
        return safeCondition;
    }
}
