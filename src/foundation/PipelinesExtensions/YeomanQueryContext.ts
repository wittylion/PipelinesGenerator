import { QueryContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class YeomanQueryContext<T> extends QueryContext<T> {
    constructor(public yeomanGenerator: Generator) {
        super();
    }
}