import { ChooseProgramFlowProcessor } from "../ChooseProgramFlowProcessor";
import { ChooseProgramFlowArguments } from "../ChooseProgramFlowArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import { ChoiceType } from "inquirer";
import S from "string";
import { ChooseProgramFlowMessages } from "../ChooseProgramFlowMessages";
import { GenerateCommonPipelineFilesExecutor } from "../../GenerateCommonFiles";
import { EnsureOptionExecutor } from "../../EnsureOption";
import "reflect-metadata";
import { injectable } from "inversify"

@injectable()
export class AskUserToChooseAvailableOptions extends ChooseProgramFlowProcessor {
    public async SafeExecute(args: ChooseProgramFlowArguments): Promise<void> {
        let optionName = "programFlow";

        let answer = await EnsureOptionExecutor.obtainByKeyOrList(
            args.yeomanGenerator,
            optionName,
            args.availableFlows.map(x => <ChoiceType>{
                name: x.flowDescription,
                value: x.flowType
            }),
            "Please choose a program flow: ",
            GenerateCommonPipelineFilesExecutor.Identifier
        );

        args.SetResultWithInformation(
            answer,
            S(ChooseProgramFlowMessages.ChosenFlow)
                .template({ result: answer })
                .s
        );
    }

    public SafeCondition(args: ChooseProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
