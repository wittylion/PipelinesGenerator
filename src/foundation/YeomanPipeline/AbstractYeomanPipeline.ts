import Generator = require("yeoman-generator");

export abstract class AbstractYeomanPipeline extends Generator {
    public async initializing(): Promise<void> {
    }
    
    public async prompting(): Promise<void> {
    }
    
    public async configuring(): Promise<void> {
    }
    
    public async default(): Promise<void> {
    }
    
    public async writing(): Promise<void> {
    }
    
    public async install(): Promise<void> {
    }
    
    public async end(): Promise<void> {
    }
}