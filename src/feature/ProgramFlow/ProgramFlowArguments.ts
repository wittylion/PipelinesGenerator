import { injectable } from "inversify";
import { PipelineContext } from "solid-pipelines";

@injectable()
export class ProgramFlowArguments extends PipelineContext {
    selectedDesiredFlow: string;
}
