import CHOOSE_PROGRAM_FLOW from "./ServiceIdentifiers";
import { Container } from "inversify";
import { IPipeline, IProcessor } from "solid-pipelines";
import { ChooseProgramFlowPipeline } from "./ChooseProgramFlowPipeline";
import { ChooseProgramFlowExecutor, ChooseProgramFlowArguments } from ".";
import { ChooseProgramFlowPredefinedExecutor } from "./ChooseProgramFlowPredefinedExecutor";
import { AddAvailableOptions, AskUserToChooseAvailableOptions } from "./processors";

function injectProgramFlowQuestion(container: Container): void {
    container.bind<IPipeline>(CHOOSE_PROGRAM_FLOW.PIPELINE)
        .to(ChooseProgramFlowPipeline);

    container.bind<ChooseProgramFlowExecutor>(CHOOSE_PROGRAM_FLOW.EXECUTOR)
        .to(ChooseProgramFlowExecutor);

    container.bind<ChooseProgramFlowArguments>(CHOOSE_PROGRAM_FLOW.ARGUMENTS)
        .to(ChooseProgramFlowArguments);

    container.bind<ChooseProgramFlowPredefinedExecutor>(CHOOSE_PROGRAM_FLOW.PREDEFINED_EXECUTOR)
        .to(ChooseProgramFlowPredefinedExecutor);

    container.bind<IProcessor>(CHOOSE_PROGRAM_FLOW.PROCESSOR)
        .to(AddAvailableOptions);

    container.bind<IProcessor>(CHOOSE_PROGRAM_FLOW.PROCESSOR)
        .to(AskUserToChooseAvailableOptions);
}

export { injectProgramFlowQuestion }
