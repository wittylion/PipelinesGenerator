import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { ProgramFlowArguments, ProgramFlowExecutor } from "../../../../feature/ProgramFlow";
import { ModelsProvider, GeneratorsProvider, GenerateCommonFilesPipeline } from "../../GenerateCommonFiles";
import { GenerateCommonPipelineFilesExecutor } from "../../../../feature/GenerateCommonFiles";
import { TypescriptProgramFlowPipeline } from "../../TypescriptProgramFlow/TypescriptProgramFlowPipeline";

export class Default extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {
        let programFlowArguments = new ProgramFlowArguments(
            args.yeomanGenerator, 
            ModelsProvider.Instance, 
            GeneratorsProvider.Instance
        );
        programFlowArguments.commonFilesGenerator = new GenerateCommonPipelineFilesExecutor(GenerateCommonFilesPipeline.Instance);
        
        let programFlow = new ProgramFlowExecutor(TypescriptProgramFlowPipeline.Instance);

        let result = await programFlow.execute(programFlowArguments);

        console.log(result.message);
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
