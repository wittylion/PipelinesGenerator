import { ChooseProjectProcessor } from "../ChooseProjectProcessor";
import { ChooseProjectArguments } from "../ChooseProjectArguments";
import { ProjectModel } from "../models/ProjectModel";

export class ComposeListOfAvailableProjects extends ChooseProjectProcessor {
    public static readonly Instance = new ComposeListOfAvailableProjects();

    public async SafeExecute(args: ChooseProjectArguments): Promise<void> {
        args.AvailableProjects.push(new ProjectModel("ts", "Typescript language"));
        args.AvailableProjects.push(new ProjectModel("tsp", "Typescript language [solid-pipelines boosted]"));
        args.AvailableProjects.push(new ProjectModel("cs", "C# language"));
        args.AvailableProjects.push(new ProjectModel("csp", "C# language [Pipelines.Net boosted]"));
        args.AvailableProjects.push(new ProjectModel("sc", "Sitecore framework"));
    }

    public SafeCondition(args: ChooseProjectArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProjectArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
