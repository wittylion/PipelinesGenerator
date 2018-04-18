import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../YeomanQuestions";
import S from "string";
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";

export class AskPathIfGuessIsNotCorrect extends ResolveFileDependencyProcessor {
    public static readonly Instance = new AskPathIfGuessIsNotCorrect();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        let question: Question = undefined;
        const optionName = "selectFile";

        question = {
            type: InputTypeEnum.Input,
            name: optionName,
            message: S(ResolveFileDependencyMessages.TypeFilePath)
                .template({ directory: args.fromDirectory }).s
        };

        let answers = await args.yeomanGenerator.prompt(question);
        let answer = answers[optionName];

        if (!S(args.fromDirectory).isEmpty()) {
            let message = S(ResolveFileDependencyMessages.UserTypedFilePath)
                .template({ path: answer }).s;
            args.SetResultWithInformation(answer, message);
        }
        else {
            args.AddWarning("User provided an empty path.");
        }
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = !args.ResultIsSet();
        return safeCondition;
    }
}
