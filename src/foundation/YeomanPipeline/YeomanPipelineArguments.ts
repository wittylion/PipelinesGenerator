import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { YeomanContext } from "../PipelinesExtensions";
import { Container } from "inversify"
import YEOMAN from "./ServiceIdentifiers";

export class YeomanPipelineArguments extends PipelineContext {
    constructor(
        yeomanGenerator: Generator
    ) { 
        super();
        this.container.bind<Generator>(YEOMAN.INSTANCE)
            .toConstantValue(yeomanGenerator);
    }

    
    private _container : Container = new Container({ skipBaseClassChecks: true });
    public get container() : Container {
        return this._container;
    }
}
