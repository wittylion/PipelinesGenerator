import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import { injectCSharpDependencies } from "../../DependencyInjection/Inject";
import { Defaults } from "../../Defaults";

import Generator = require("yeoman-generator");

export class Initializing extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {

        let generator = args.container.get<Generator>(YEOMAN.INSTANCE);

        injectCSharpDependencies(args.container);

        Defaults.initializeModels(generator);
    }

    public SafeCondition(args: CSharpYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: CSharpYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
