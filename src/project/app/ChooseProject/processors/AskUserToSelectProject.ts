import { ChooseProjectProcessor } from "../ChooseProjectProcessor";
import { ChooseProjectArguments } from "../ChooseProjectArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../../../foundation/YeomanQuestions";
import S from "string";
import { ChooseProjectMessages } from "../ChooseProjectMessages";
import { ChoiceType } from "inquirer";

export class AskUserToSelectProject extends ChooseProjectProcessor {
    public static readonly Instance = new AskUserToSelectProject();

    public async SafeExecute(args: ChooseProjectArguments): Promise<void> {
        let optionName = "projectName";
        let optionValueQuestion: Question = {
            type: InputTypeEnum.List,
            name: optionName,
            message: "Please select a project that you want to use: ",
            choices: args.AvailableProjects.map(x => <ChoiceType>{
                name: x.description,
                value: x.name
            })
        };

        let answers = await args.yeomanGenerator.prompt(optionValueQuestion);

        let answer = answers[optionName];
        args.SetResultWithInformation(
            answer,
            S(ChooseProjectMessages.UserSelectedOption)
                .template({ answer: answer })
                .s
        );
    }

    public SafeCondition(args: ChooseProjectArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProjectArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
