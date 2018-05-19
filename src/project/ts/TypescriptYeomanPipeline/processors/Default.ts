import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { ProgramFlowPredefinedExecutor } from "../../../../feature/ProgramFlow/ProgramFlowPredefinedExecutor";
import PROGRAM_FLOW from "../../../../feature/ProgramFlow/ServiceIdentifiers";

export class Default extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {

        let programFlow = args.container.get<ProgramFlowPredefinedExecutor>(
            PROGRAM_FLOW.PREDEFINED_EXECUTOR
        );
        let result = await programFlow.execute();
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
