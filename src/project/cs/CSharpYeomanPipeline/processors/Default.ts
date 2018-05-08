import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import { ProgramFlowArguments, ProgramFlowExecutor } from "../../../../feature/ProgramFlow";
import { ModelsProvider } from "../../GenerateCommonFiles/ModelsProvider";
import { GenerateCommonPipelineFilesExecutor } from "../../../../feature/GenerateCommonFiles";
import { ProgramFlowPipeline } from "../../../../feature/ProgramFlow/ProgramFlowPipeline";
import { GeneratorsProvider } from "../../GenerateCommonFiles/GeneratorsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";

export class Default extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {
        let programFlowArguments = new ProgramFlowArguments(
            args.yeomanGenerator, 
            args.container.get(GENERATE_COMMON_FILES.MODELS_PROVIDER), 
            GeneratorsProvider.Instance
        );
        
        let programFlow = new ProgramFlowExecutor(ProgramFlowPipeline.Instance);

        let result = await programFlow.execute(programFlowArguments);

        console.log(result.message);
    }

    public SafeCondition(args: CSharpYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: CSharpYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
