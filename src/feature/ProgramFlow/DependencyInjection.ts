import { Container } from "inversify";
import { IPipeline, IProcessor } from "solid-pipelines";
import { ProgramFlowPipeline } from "./ProgramFlowPipeline";
import { ProgramFlowExecutor, ProgramFlowArguments } from ".";
import { ProgramFlowPredefinedExecutor } from "./ProgramFlowPredefinedExecutor";
import PROGRAM_FLOW from "./ServiceIdentifiers";
import { AskForDesiredProgramFlow, CreateProcessorWhenUserSelectedAnOption, TryCreateProcessorFromArguments, GenerateCommonFilesFlow } from "./processors";


function injectProgramFlow(container: Container): void {
    container.bind<IPipeline>(PROGRAM_FLOW.PIPELINE)
        .to(ProgramFlowPipeline);

    container.bind<ProgramFlowExecutor>(PROGRAM_FLOW.EXECUTOR)
        .to(ProgramFlowExecutor);

    container.bind<ProgramFlowArguments>(PROGRAM_FLOW.ARGUMENTS)
        .to(ProgramFlowArguments);

    container.bind<ProgramFlowPredefinedExecutor>(PROGRAM_FLOW.PREDEFINED_EXECUTOR)
        .to(ProgramFlowPredefinedExecutor);

    container.bind<IProcessor>(PROGRAM_FLOW.PROCESSOR)
        .to(TryCreateProcessorFromArguments);

    container.bind<IProcessor>(PROGRAM_FLOW.PROCESSOR)
        .to(AskForDesiredProgramFlow);

    container.bind<IProcessor>(PROGRAM_FLOW.PROCESSOR)
        .to(CreateProcessorWhenUserSelectedAnOption);

    container.bind<IProcessor>(PROGRAM_FLOW.PROCESSOR)
        .to(GenerateCommonFilesFlow);
}

export { injectProgramFlow }
