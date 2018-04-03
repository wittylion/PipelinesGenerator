import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class EnsureOptionPipeline implements IPipeline {
    public static readonly Instance = new EnsureOptionPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.ValidateGenerator.Instance,
            Processors.ValidateOptionName.Instance,
            Processors.TryToObtainOptionInKebabCase.Instance,
            Processors.TryToObtainOptionInSnakeCase.Instance,
            Processors.TryToObtainOptionInCamelCase.Instance,
            Processors.EnsureQuestionMessage.Instance,
            Processors.EnsureAnswerInputType.Instance,
            Processors.AskUserToProvideValue.Instance,
        
        ];
    }
}