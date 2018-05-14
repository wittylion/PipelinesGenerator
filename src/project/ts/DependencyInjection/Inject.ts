import { Container } from "inversify";
import { injectCommon } from "../../../feature/DependencyInjection/Common";
import { injectTypescriptProgramFlow } from "../TypescriptProgramFlow/DependencyInjection";

function injectTypescriptDependencies(container: Container) {
    injectCommon(container);
    injectTypescriptProgramFlow(container);
}

export { injectTypescriptDependencies }
