import { Default as CSharpDefault } from '../../../cs/CSharpYeomanPipeline/processors/Default'
import { CSharpYeomanPipelineArguments } from '../../../cs/CSharpYeomanPipeline/CSharpYeomanPipelineArguments';
import { ProgramFlowArguments, ProgramFlowExecutor } from '../../../../feature/ProgramFlow';
import { ProgramFlowPipeline } from '../../../../feature/ProgramFlow/ProgramFlowPipeline';
import { DefaultGeneratorsProvider } from '../../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider';
import { SitecoreYeomanPipelineProcessor } from '../SitecoreYeomanPipelineProcessor';
import { SitecoreYeomanPipelineArguments } from '../SitecoreYeomanPipelineArguments';
import { ModelsProvider } from '../../GenerateCommonFiles/ModelsProvider';

export class Default extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {
        let programFlowArguments = new ProgramFlowArguments(
            args.yeomanGenerator, 
            ModelsProvider.Instance, 
            DefaultGeneratorsProvider.Instance
        );
        
        let programFlow = new ProgramFlowExecutor(ProgramFlowPipeline.Instance);

        let result = await programFlow.execute(programFlowArguments);

        console.log(result.message);
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
