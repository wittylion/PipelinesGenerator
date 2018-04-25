import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class YeomanContext extends PipelineContext {
    constructor(public yeomanGenerator: Generator) {
        super();
    }
}