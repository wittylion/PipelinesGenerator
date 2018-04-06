import { PipelineRunner } from "solid-pipelines";
import { GenerateExportsArguments } from './GenerateExportsArguments'
import { GenerateExportsPipeline } from './GenerateExportsPipeline'

import Generator = require("yeoman-generator");

export class GenerateExportsExecutor {
    public static Instance: GenerateExportsExecutor = new GenerateExportsExecutor();
    
    public static exportAllFromDirectory(dir: string, yeomanGenerator: Generator) : Promise<void> {
        return GenerateExportsExecutor.Instance.exportAllFromDirectory(dir, yeomanGenerator);
    }
    
    public static exportAllFiles(yeomanGenerator: Generator, ...files: string[]) : Promise<void> {
        return GenerateExportsExecutor.Instance.exportAllFiles(yeomanGenerator, ...files);
    }

    async exportAllFromDirectory(dir: string, yeomanGenerator: Generator) : Promise<void> {
        let args = new GenerateExportsArguments();
        args.yeomanGenerator = yeomanGenerator;
        args.exportFileDestination = dir;
        args.exportAllFromDestination = true;
        args.filterOnlyNeededExports = true;

        await this.execute(args);
    }

    async exportAllFiles(yeomanGenerator: Generator, ...files: string[]) : Promise<void> {
        let args = new GenerateExportsArguments();
        args.yeomanGenerator = yeomanGenerator;
        args.exportFileNames = files;
        args.exportAllFromDestination = true;
        args.filterOnlyNeededExports = true;

        await this.execute(args);
    }

    execute(args: GenerateExportsArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateExportsPipeline.Instance, args);
    }
}