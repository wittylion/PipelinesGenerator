import { SitecoreYeomanPipelineMessages } from "../SitecoreYeomanPipelineMessages";
import { SitecoreYeomanPipelineProcessor } from "../SitecoreYeomanPipelineProcessor";
import { SitecoreYeomanPipelineArguments } from "../SitecoreYeomanPipelineArguments";
import Generator = require("yeoman-generator");
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";

export class Prompting extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Prompting();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {
        let generator = args.container.get<Generator>(YEOMAN.INSTANCE);
        generator.log(SitecoreYeomanPipelineMessages.Greeting);
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
