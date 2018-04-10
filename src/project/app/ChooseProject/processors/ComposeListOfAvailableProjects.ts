import { ChooseProjectProcessor } from "../ChooseProjectProcessor";
import { ChooseProjectArguments } from "../ChooseProjectArguments";
import { ProjectModel } from "../models/ProjectModel";

export class ComposeListOfAvailableProjects extends ChooseProjectProcessor {
    public static readonly Instance = new ComposeListOfAvailableProjects();

    public async SafeExecute(args: ChooseProjectArguments): Promise<void> {
        args.AvailableProjects.push(new ProjectModel("ts", "Typescript language"));
        args.AvailableProjects.push(new ProjectModel("cs", "C# language"));
    }

    public SafeCondition(args: ChooseProjectArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProjectArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
