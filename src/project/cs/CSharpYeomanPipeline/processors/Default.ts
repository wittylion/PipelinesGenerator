import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import { ProgramFlowArguments, ProgramFlowExecutor } from "../../../../feature/ProgramFlow";
import { ModelsProvider } from "../../GenerateCommonFiles/ModelsProvider";
import { GenerateCommonPipelineFilesExecutor } from "../../../../feature/GenerateCommonFiles";
import { ProgramFlowPipeline } from "../../../../feature/ProgramFlow/ProgramFlowPipeline";
import { GeneratorsProvider } from "../../GenerateCommonFiles/GeneratorsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ProgramFlowPredefinedExecutor } from "../../../../feature/ProgramFlow/ProgramFlowPredefinedExecutor";
import PROGRAM_FLOW from "../../../../feature/ProgramFlow/ServiceIdentifiers";

export class Default extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {
        let programFlow = args.container.get<ProgramFlowPredefinedExecutor>(
            PROGRAM_FLOW.PREDEFINED_EXECUTOR
        );
        let result = await programFlow.execute();
    }

    public SafeCondition(args: CSharpYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: CSharpYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
