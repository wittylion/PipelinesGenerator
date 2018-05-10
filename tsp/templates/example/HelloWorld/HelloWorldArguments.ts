import { PipelineContext } from "solid-pipelines";

export class HelloWorldArguments extends PipelineContext {

    public static create(
        Name: string,
    ): HelloWorldArguments { 
        let instance = new HelloWorldArguments(
            Name
        );

        return instance;
    }

    constructor(
        public Name: string,
    ) { 
        super();
    }

    Message: string = "";
}
