import { QueryContext } from "solid-pipelines";
import { ProjectModel } from "./models/ProjectModel";
import { YeomanQueryContext } from "../../../foundation/PipelinesExtensions";

export class ChooseProjectArguments extends YeomanQueryContext<string> {
    AvailableProjects: ProjectModel[] = [];
}
