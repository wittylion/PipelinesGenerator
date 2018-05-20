import { PipelineRunner, MessageFilter, PipelineMessage, PipelineExecutor, IPipeline } from "solid-pipelines";
import { GenerateExportsArguments } from './GenerateExportsArguments'
import { GenerateExportsPipeline } from './GenerateExportsPipeline'

import Generator = require("yeoman-generator");
import "reflect-metadata";
import { injectable, inject } from "inversify";
import GENERATE_EXPORTS from "./ServiceIdentifiers";

@injectable()
export class GenerateExportsExecutor extends PipelineExecutor {
    /**
     *
     */
    constructor(
        @inject(GENERATE_EXPORTS.PIPELINE)
        private pipeline: IPipeline,

        private runner: PipelineRunner
    ) {
        super(pipeline, runner);

    }
}