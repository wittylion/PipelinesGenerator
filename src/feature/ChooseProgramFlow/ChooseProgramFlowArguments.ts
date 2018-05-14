import { PipelineContext, QueryContext } from "solid-pipelines";
import { ProgramFlowModel } from "./models/ProgramFlowModel";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";

import Generator = require("yeoman-generator");
import { inject, injectable } from "inversify";
import YEOMAN from "../../foundation/YeomanPipeline/ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class ChooseProgramFlowArguments extends QueryContext<string> {
    public availableFlows: ProgramFlowModel[] = [];
    public chosenFlow: ProgramFlowModel;
}
