import { IPipeline, IProcessor, PipelineRunner } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateFileFromTemplatePipeline } from '../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplatePipeline';
import "reflect-metadata"
import { injectable, multiInject, inject } from 'inversify';
import GENERATE_CSHARP_FILE from './ServiceIdentifiers';
import YEOMAN from '../../../foundation/YeomanPipeline/ServiceIdentifiers';
import Generator = require("yeoman-generator")

@injectable()
export class GenerateCSharpFileFromTemplatePipeline extends GenerateFileFromTemplatePipeline {

    /**
     *
     */
    constructor(

        @multiInject(GENERATE_CSHARP_FILE.PROCESSOR)
        public processors: IProcessor[],

        public runner: PipelineRunner,

        @inject(YEOMAN.INSTANCE)
        yeomanGenerator: Generator

    ) {
        super(
            { ensure: async (template: string) => yeomanGenerator.templatePath(template) },
            { ensure: async (template: string) => yeomanGenerator.destinationPath(template) },
            { check: async(path: string) => yeomanGenerator.fs.exists(path) },
            { generate: async (...args) => yeomanGenerator.fs.copyTpl(args[0], args[1], args[2]) });
    }


    SetOptions(): IProcessor[] {
        return this.processors;
    }
}