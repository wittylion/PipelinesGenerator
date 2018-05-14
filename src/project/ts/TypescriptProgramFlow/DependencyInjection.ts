import { Container } from "inversify";
import { IPipeline, IProcessor } from "solid-pipelines";
import PROGRAM_FLOW from "../../../feature/ProgramFlow/ServiceIdentifiers";
import { TypescriptProgramFlowPipeline } from "./TypescriptProgramFlowPipeline";
import { CreateExports } from "./processors";

function injectTypescriptProgramFlow(container: Container) {
        
    container.rebind<IPipeline>(PROGRAM_FLOW.PIPELINE)
        .to(TypescriptProgramFlowPipeline);
        
    container.bind<IProcessor>(CreateExports)
        .toSelf();

}

export { injectTypescriptProgramFlow }
