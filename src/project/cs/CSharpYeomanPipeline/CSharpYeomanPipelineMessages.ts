import yosay from "yosay";
import c from "chalk";

export class CSharpYeomanPipelineMessages {
    public static Greeting = yosay(
        `Hello there, this is a ${c.green("C# generator")}. `
        + "You're about to create a new pipeline. "
        + "Let's provide some options."
    );
}
