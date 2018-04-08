import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";

export class CreateProcessor extends ProgramFlowProcessor {
    public static readonly Instance = new CreateProcessor();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
