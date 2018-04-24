import { PipelineRunner } from "solid-pipelines";
import { EnsureOptionArguments } from './EnsureOptionArguments'
import { EnsureOptionPipeline } from './EnsureOptionPipeline'
import Generator = require('yeoman-generator');
import { InputTypeEnum } from "../../foundation/YeomanQuestions";
import { Questions, ChoiceType } from "inquirer";

export class EnsureOptionExecutor {
    public static Instance: EnsureOptionExecutor = new EnsureOptionExecutor();

    public static obtainByKeyOrList(
        generator: Generator,
        option: string,
        choices: ChoiceType[],
        message?: string,
        defaultValue?: any
    ): Promise<string> {

        return EnsureOptionExecutor.Instance.obtainByKeyOrList(
            generator,
            option,
            choices,
            message,
            defaultValue
        );
    }

    public static obtainByKey(
        generator: Generator,
        option: string,
        inputType: InputTypeEnum = InputTypeEnum.Input,
        storeAsSuggestionForNextTime: boolean = false,
        storeAsDefaultForNextTime: boolean = false,
        defaultValue?: any
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
    
    async obtainByKeyOrList(
        generator: Generator,
        option: string,
        choices: ChoiceType[],
        message?: string,
        defaultValue?: any
    ): Promise<string> {

        let args = EnsureOptionArguments.Create(
            generator,
            option,
            InputTypeEnum.List,
            false,
            false,
            defaultValue
        );
        args.choices = choices;
        args.questionMessage = message;

        await this.execute(args);
        return args.result;
    }

    async obtainByKey(
        generator: Generator,
        option: string,
        inputType: InputTypeEnum = InputTypeEnum.Input,
        storeAsSuggestionForNextTime: boolean = false,
        storeAsDefaultForNextTime: boolean = false,
        defaultValue?: any
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