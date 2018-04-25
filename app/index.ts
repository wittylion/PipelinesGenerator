import Generator = require("yeoman-generator");
import { ChooseProjectExecutor, ChooseProjectArguments } from "../src/project/app/ChooseProject";

class PipelinesGenerator extends Generator {
    async default() {
        let args = new ChooseProjectArguments(this);

        let chosenProjectResult = await ChooseProjectExecutor.Instance.execute(args);

        if (!chosenProjectResult.result) {
            this.log(chosenProjectResult.messages
                .map(message =>
                    message.Message
                )
                .join("\n"));
            return;
        }
        else {
            this.composeWith(
                require.resolve('../' + chosenProjectResult.result),
                this.options
            );
        }
    }
}

export = PipelinesGenerator
