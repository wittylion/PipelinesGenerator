import { PipelineRunner, MessageFilter, PipelineMessage } from "solid-pipelines";
import { GenerateExportsArguments } from './GenerateExportsArguments'
import { GenerateExportsPipeline } from './GenerateExportsPipeline'

import Generator = require("yeoman-generator");

export class GenerateExportsExecutor {
    public static Instance: GenerateExportsExecutor = new GenerateExportsExecutor();

    public static exportAllFromDirectory(dir: string, yeomanGenerator: Generator) : Promise<{messages:PipelineMessage[]}> {
        return GenerateExportsExecutor.Instance.exportAllFromDirectory(dir, yeomanGenerator);
    }

    public static exportAllFiles(yeomanGenerator: Generator, dir:string, ...files: string[]) : Promise<{messages:PipelineMessage[]}> {
        return GenerateExportsExecutor.Instance.exportAllFiles(yeomanGenerator, dir, ...files);
    }

    exportAllFromDirectory(dir: string, yeomanGenerator: Generator) : Promise<{messages:PipelineMessage[]}> {
        let args = new GenerateExportsArguments();
        args.yeomanGenerator = yeomanGenerator;
        args.exportFileDestination = dir;
        args.exportAllFromDestination = true;
        args.filterOnlyNeededExports = true;

        return this.execute(args);
    }

    async exportAllFiles(yeomanGenerator: Generator, dir:string, ...files: string[]) : Promise<{messages:PipelineMessage[]}> {
        let args = new GenerateExportsArguments();

        args.exportFileDestination = dir;
        args.yeomanGenerator = yeomanGenerator;
        args.exportFileNames = files;
        args.exportAllFromDestination = false;
        args.filterOnlyNeededExports = true;

        return this.execute(args);
    }

    async execute(args: GenerateExportsArguments) : Promise<{messages:PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateExportsPipeline.Instance, args);

        return {messages: args.GetMessages(MessageFilter.All)};
    }
}