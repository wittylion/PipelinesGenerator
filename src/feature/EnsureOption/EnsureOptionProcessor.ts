import { SafeProcessor } from "solid-pipelines";
import { EnsureOptionArguments } from "./EnsureOptionArguments";

export abstract class EnsureOptionProcessor extends SafeProcessor<EnsureOptionArguments> {
    public static DefaultValuesKey: string = "defaultValues";

    SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && !args.IsAborted;
    }
}
