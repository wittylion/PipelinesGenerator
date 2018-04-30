import { PipelineRunner, MessageFilter, PipelineMessage } from "solid-pipelines";
import { GenerateExportsArguments } from './GenerateExportsArguments'
import { GenerateExportsPipeline } from './GenerateExportsPipeline'

import Generator = require("yeoman-generator");

export class GenerateExportsExecutor {
    public static Instance: GenerateExportsExecutor = new GenerateExportsExecutor();

    public static exportAllFromDirectory(yeomanGenerator: Generator, dir?: string) : Promise<void> {
        return GenerateExportsExecutor.Instance.exportAllFromDirectory(yeomanGenerator, dir);
    }

    public static exportAllFiles(yeomanGenerator: Generator, dir:string, ...files: string[]) : Promise<void> {
        return GenerateExportsExecutor.Instance.exportAllFiles(yeomanGenerator, dir, ...files);
    }

    exportAllFromDirectory(
        yeomanGenerator: Generator,
        dir?: string
    ) : Promise<void> {
        let args = new GenerateExportsArguments(
            yeomanGenerator,
            dir,
            true,
            true
        );

        return this.execute(args);
    }

    async exportAllFiles(
        yeomanGenerator: Generator,
        dir:string,
        ...files: string[]
    ) : Promise<void> {
        let args = new GenerateExportsArguments(
            yeomanGenerator,
            dir,
            true,
            false,
            files
        );

        return this.execute(args);
    }

    async execute(args: GenerateExportsArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateExportsPipeline.Instance, args);

    }
}