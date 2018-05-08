import { Container } from "inversify";
import { injectProgramFlow } from "../ProgramFlow/DependencyInjection";
import { injectProgramFlowQuestion } from "../ChooseProgramFlow/DependencyInjection";

function injectCommon(container: Container) {
    injectProgramFlow(container);
    injectProgramFlowQuestion(container);
}

export { injectCommon }
