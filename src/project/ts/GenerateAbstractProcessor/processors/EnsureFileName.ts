import { GenerateAbstractProcessor } from "../GenerateAbstractProcessor";
import { GenerateAbstractProcessorArguments } from "../GenerateAbstractProcessorArguments";
import S from "string";

export class EnsureFileName extends GenerateAbstractProcessor {
    public static readonly Instance = new EnsureFileName();

    public async SafeExecute(args: GenerateAbstractProcessorArguments): Promise<void> {
        args.fileName = S(args.className).ensureRight(".ts").s;
    }

    public SafeCondition(args: GenerateAbstractProcessorArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorArguments): boolean {
        let safeCondition = S(args.fileName).isEmpty();
        return safeCondition;
    }
}
