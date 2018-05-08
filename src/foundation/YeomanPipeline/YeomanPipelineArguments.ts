import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { YeomanContext } from "../PipelinesExtensions";
import { Container } from "inversify"

export class YeomanPipelineArguments extends YeomanContext {
    constructor(
        public yeomanGenerator: Generator
    ) { 
        super(yeomanGenerator);
    }

    
    private _container : Container = new Container();
    public get container() : Container {
        return this._container;
    }
}
