import { PipelineRunner } from "solid-pipelines";
import { ObtainOptionArguments } from './ObtainOptionArguments'
import { ObtainOptionPipeline } from './ObtainOptionPipeline'
import Generator = require('yeoman-generator');

export class ObtainOptionExecutor {
    public static Instance: ObtainOptionExecutor = new ObtainOptionExecutor();

    public static obtainByKey(generator: Generator, option: string) : Promise<string> {
        return ObtainOptionExecutor.Instance.obtainByKey(generator, option);
    }

    async obtainByKey(generator: Generator, option: string) : Promise<string> {
        let args = ObtainOptionArguments.Create(generator, option);
        await this.execute(args);
        return args.optionValue;
    }

    execute(args: ObtainOptionArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(ObtainOptionPipeline.Instance, args);
    }
}