import { PipelineContext } from "solid-pipelines";
import { ProgramFlowModel } from "./models/ProgramFlowModel";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";

import Generator = require("yeoman-generator");

export class ChooseProgramFlowArguments extends YeomanQueryContext<string> {
    constructor(
        public yeomanGenerator: Generator,

    ) {
        super(yeomanGenerator);
    }
    public availableFlows: ProgramFlowModel[] = [];
    public chosenFlow: ProgramFlowModel;
}
