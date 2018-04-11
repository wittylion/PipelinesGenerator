import yosay from "yosay";
import c from "chalk";

export class TypescriptYeomanPipelineMessages {
    public static Greeting = yosay(
        `Hello there, this is a ${c.green("Typescript generator")}. `
        + "You're about to create a new pipeline. "
        + "Let's provide some options."
    );
}
