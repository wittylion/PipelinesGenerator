import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class ObtainOptionArguments extends PipelineContext {
    public static Create(generator: Generator, option: string): ObtainOptionArguments {
        let result = new ObtainOptionArguments();

        result.optionName = option;
        result.yeomanGenerator = generator;

        return result;
    }

    yeomanGenerator: Generator;
    optionName: string;
    optionValue: string;
}
