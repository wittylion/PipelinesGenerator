import { Default as CSharpDefault } from '../../../cs/CSharpYeomanPipeline/processors/Default'
import { CSharpYeomanPipelineArguments } from '../../../cs/CSharpYeomanPipeline/CSharpYeomanPipelineArguments';
import { ProgramFlowArguments, ProgramFlowExecutor } from '../../../../feature/ProgramFlow';
import { ProgramFlowPipeline } from '../../../../feature/ProgramFlow/ProgramFlowPipeline';
import { SitecoreYeomanPipelineProcessor } from '../SitecoreYeomanPipelineProcessor';
import { SitecoreYeomanPipelineArguments } from '../SitecoreYeomanPipelineArguments';
import { ModelsProvider } from '../../GenerateCommonFiles/ModelsProvider';
import { GeneratorsProvider } from '../../../cs/GenerateCommonFiles/GeneratorsProvider';
import GENERATE_COMMON_FILES from '../../../../feature/GenerateCommonFiles/ServiceIdentifiers';
import PROGRAM_FLOW from '../../../../feature/ProgramFlow/ServiceIdentifiers';
import { ProgramFlowPredefinedExecutor } from '../../../../feature/ProgramFlow/ProgramFlowPredefinedExecutor';

export class Default extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Default();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {
        let programFlow = args.container.get<ProgramFlowPredefinedExecutor>(
            PROGRAM_FLOW.PREDEFINED_EXECUTOR
        );
        let result = await programFlow.execute();
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
