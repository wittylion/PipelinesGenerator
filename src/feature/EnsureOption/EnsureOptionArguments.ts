import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { ResultTypeEnum } from "./ResultTypeEnum";
import { InputTypeEnum } from "./InputTypeEnum";

export class EnsureOptionArguments extends PipelineContext {
    public static Create(
        generator: Generator,
        optionName: string,
        inputType: InputTypeEnum = InputTypeEnum.Input,
        storeAsSuggestionForNextTime: boolean = false,
        storeAsDefaultForNextTime: boolean = false,
        defaultValue?: any
    ): EnsureOptionArguments {

        let result = new EnsureOptionArguments();

        result.inputType = inputType;
        result.yeomanGenerator = generator;
        result.optionName = optionName;
        result.suggestionOfDefaultValue = defaultValue;
        result.storeAsDefaultForNextTime = storeAsDefaultForNextTime;
        result.storeAsSuggestionForNextTime = storeAsSuggestionForNextTime;

        return result;
    }

    result: string;
    yeomanGenerator: Generator;
    optionName: string;
    questionMessage: string;
    inputType: InputTypeEnum;
    suggestionOfDefaultValue: any;

    storeAsSuggestionForNextTime: boolean;
    storeAsDefaultForNextTime: boolean;
}

