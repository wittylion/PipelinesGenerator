import { ChooseProgramFlowProcessor } from "../ChooseProgramFlowProcessor";
import { ChooseProgramFlowArguments } from "../ChooseProgramFlowArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import { ChoiceType } from "inquirer";
import S from "string";
import { ChooseProgramFlowMessages } from "../ChooseProgramFlowMessages";
import { GenerateCommonPipelineFilesExecutor } from "../../GenerateCommonFiles";

export class AskUserToChooseAvailableOptions extends ChooseProgramFlowProcessor {
    public static readonly Instance = new AskUserToChooseAvailableOptions();

    public async SafeExecute(args: ChooseProgramFlowArguments): Promise<void> {
        let optionName = "programFlow";
        let optionValueQuestion: Question = {
            type: InputTypeEnum.List,
            name: optionName,
            message: "Please choose a program flow: ",
            choices: args.availableFlows.map(x => <ChoiceType>{
                name: x.flowDescription,
                value: x.flowType
            }),
            default: GenerateCommonPipelineFilesExecutor.Identifier
        };

        let answers = await args.yeomanGenerator.prompt(optionValueQuestion);

        let answer = answers[optionName];
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
