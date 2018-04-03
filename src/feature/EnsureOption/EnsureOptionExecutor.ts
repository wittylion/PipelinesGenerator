import { PipelineRunner } from "solid-pipelines";
import { EnsureOptionArguments } from './EnsureOptionArguments'
import { EnsureOptionPipeline } from './EnsureOptionPipeline'
import Generator = require('yeoman-generator');
import { InputTypeEnum } from "./InputTypeEnum";

export class EnsureOptionExecutor {
    public static Instance: EnsureOptionExecutor = new EnsureOptionExecutor();

    public static obtainByKey(
        generator: Generator,
        option: string,
        inputType: InputTypeEnum = InputTypeEnum.Input,
        storeAsSuggestionForNextTime: boolean = false,
        storeAsDefaultForNextTime: boolean = false,
        defaultValue?: string
    ): Promise<string> {

        return EnsureOptionExecutor.Instance.obtainByKey(
            generator,
            option,
            inputType,
            storeAsSuggestionForNextTime,
            storeAsDefaultForNextTime,
            defaultValue
        );
    }

    async obtainByKey(
        generator: Generator,
        option: string,
        inputType: InputTypeEnum = InputTypeEnum.Input,
        storeAsSuggestionForNextTime: boolean = false,
        storeAsDefaultForNextTime: boolean = false,
        defaultValue?: string
    ): Promise<string> {

        let args = EnsureOptionArguments.Create(
            generator,
            option,
            inputType,
            storeAsSuggestionForNextTime,
            storeAsDefaultForNextTime,
            defaultValue
        );

        await this.execute(args);
        return args.result;
    }

    execute(args: EnsureOptionArguments): Promise<void> {
        var runner: PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(EnsureOptionPipeline.Instance, args);
    }
}