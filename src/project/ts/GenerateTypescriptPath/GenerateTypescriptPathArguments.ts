import { PipelineContext, QueryContext } from "solid-pipelines";

export class GenerateTypescriptPathArguments extends QueryContext<string> {
    constructor(
        public fromPath: string,
        public toPath: string,
    ) {
        super();
    }
}
