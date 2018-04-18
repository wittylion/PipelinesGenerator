import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import { InputTypeEnum } from "../../YeomanQuestions";
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";

export class AskIfFileShouldBeCreatedIfItDoesntExist extends ResolveFileDependencyProcessor {
    public static readonly Instance = new AskIfFileShouldBeCreatedIfItDoesntExist();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        let res = args.GetResult();
        const optionName = "createFile";

        let path = args.yeomanGenerator.destinationPath(res);
        if (args.yeomanGenerator.fs.exists(path)) {
            return;
        }
        
        let question = {
            type: InputTypeEnum.Confirm,
            name: optionName,
            message: S(ResolveFileDependencyMessages.ShouldCreateFile)
                .template({ path: path }).s,
            default: false
        };
        
        let answers = await args.yeomanGenerator.prompt(question);
        let answer: boolean = answers[optionName];

        if (answer) {
            args.yeomanGenerator.fs.write(path, "");
        }
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = args.ResultIsSet();
        return safeCondition;
    }
}
