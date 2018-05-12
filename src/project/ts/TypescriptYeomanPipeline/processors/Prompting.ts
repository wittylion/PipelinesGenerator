import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { TypescriptYeomanPipelineMessages } from "../TypescriptYeomanPipelineMessages";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");

export class Prompting extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Prompting();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {
        let generator = args.container.get<Generator>(YEOMAN.INSTANCE);
        generator.log(TypescriptYeomanPipelineMessages.Greeting);
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
