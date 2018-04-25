import { ChooseProjectProcessor } from "../ChooseProjectProcessor";
import { ChooseProjectArguments } from "../ChooseProjectArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../../../foundation/YeomanQuestions";
import S from "string";
import { ChooseProjectMessages } from "../ChooseProjectMessages";
import { ChoiceType } from "inquirer";
import { EnsureOptionExecutor } from "../../../../feature/EnsureOption";

export class AskUserToSelectProject extends ChooseProjectProcessor {
    public static readonly Instance = new AskUserToSelectProject();

    public async SafeExecute(args: ChooseProjectArguments): Promise<void> {
        let optionName = "projectName";
        let answer = await EnsureOptionExecutor.obtainByKeyOrList(
            args.yeomanGenerator,
            optionName,
            args.AvailableProjects.map(x => <ChoiceType>{
                name: x.description,
                value: x.name
            }),
            "Please select a project that you want to use: "
        );

        if (args.AvailableProjects.filter(x => x.name === answer).length > 0) {
            args.SetResultWithInformation(
                answer,
                S(ChooseProjectMessages.UserSelectedOption)
                    .template({ answer: answer })
                    .s
            );
            return;
        }
        else {
            args.AbortPipelineWithErrorAndNoResult(
                S(ChooseProjectMessages.CannotFindProject)
                    .template({ answer: answer, available: args.AvailableProjects.map(x => x.name).join(", ") })
                    .s
            );
        }

    }

    public SafeCondition(args: ChooseProjectArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProjectArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
