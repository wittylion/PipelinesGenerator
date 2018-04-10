import Generator = require("yeoman-generator");
import { ChooseProjectExecutor, ChooseProjectArguments } from "../src/project/app/ChooseProject";

class PipelinesGenerator extends Generator {
    async default() {
        let args = new ChooseProjectArguments(this);
        await ChooseProjectExecutor.Instance.execute(args);
        this.composeWith(
            require.resolve('../' + args.GetResultOr('ts')), 
            {}
        );
    }
}

export = PipelinesGenerator
