import { ProgramFlowProcessor } from "../../../../feature/ProgramFlow/ProgramFlowProcessor";
import { ProgramFlowArguments } from "../../../../feature/ProgramFlow/ProgramFlowArguments";
import { GenerateExportsExecutor, GenerateExportsArguments } from "../../GenerateExports";
import { ObtainOptionExecutor } from "../../../../feature/ObtainOption";
import { GenerateExportsOptionNames } from "../../GenerateExports/GenerateExportsOptionNames";
import S from "string";
import { MessageType, PipelineExecutor } from "solid-pipelines";
import Generator = require("yeoman-generator");
import "reflect-metadata"
import { injectable, inject } from "inversify";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import GENERATE_EXPORTS from "../../GenerateExports/ServiceIdentifiers";

@injectable()
export class CreateExports extends ProgramFlowProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(GENERATE_EXPORTS.EXECUTOR)
        private exportsGenerator: PipelineExecutor,

    ) {
        super();
    }

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        let option = await ObtainOptionExecutor.obtainByKey(
            this.yeomanGenerator,
            GenerateExportsOptionNames.EXPORT_DIRECTORY
        );
        let dir = option;

        if (S(dir).isEmpty()) {
            return;
        }


        if (!<any> option) {
            return;
        }

        if (S(option).toBoolean() || S(option).isEmpty()) {
            dir = '.';
        }

        await this.exportsGenerator.Execute( new GenerateExportsArguments(
            this.yeomanGenerator,
            dir,
            true,
            true)
        );
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
