# Pipelines Generator

Pipelines Generator is a [yeoman based](http://yeoman.io/learning/) utility to generate single responsibility classes representing logic actions bound together into commands or queries which are also called pipelines. The represented generator allows you to create complete pipeline from scratch on clear solution or create a pipeline which is based on packages like [Pipelines.NET for C#](https://www.nuget.org/packages/Pipelines.Net/) or [solid-pipelines for TypeScript](https://www.npmjs.com/package/solid-pipelines) which expose the main functionality which, you may see, used in pipelines from scratch a lot. 

Main goal of this generator is to speed up a process of creating pipelines, by introducing common pipeline usage patterns i.e. introducing arguments with members, pipelines binding together processors, executors running pipelines with some options.

## List of available pipelines generators

- Typescript pipeline (_uses an alias **ts** in program_)
- C# pipeline generator (_uses an alias **cs** in program_)
- C# pipeline generator, boosted with [Pipelines.NET package](https://www.nuget.org/packages/Pipelines.Net/) (_uses an alias **csp** in program_)
- Sitecore pipeline (_uses an alias **sc** in program_)

## TypeScript generator [alias: ts]

### Example:

`yo chain:ts --pipeline-name "HelloWorld" --processor-names "AdjustMessageColor LogMessageToConsole"`

Generates for you a structure like this:

```
HelloWorld
|
|__processors
|  |__AdjustMessageColor.ts
|  |__LogMessageToConsole.ts
|  |__index.ts
|
|__HelloWorld_Arguments.ts
|__HelloWorld_Processor.ts
|__HelloWorld_Messages.ts
|__HelloWorld_Pipeline.ts
|__HelloWorld_Executor.ts
|__index.ts

* - (note) underscore symbol is added to this example for better visual perception. 
```

## C# generator [alias: cs] and Pipelines net boosted generator [alias: csp]

`yo chain:cs --pipeline-name "HelloWorld" --processor-names "AdjustMessageColor LogMessageToConsole"`

Generates for you a structure like this:

```
HelloWorld
|
|__processors
|  |__AdjustMessageColor.cs
|  |__LogMessageToConsole.cs
|
|__HelloWorld_Arguments.cs
|__HelloWorld_Processor.cs
|__HelloWorld_Messages.cs
|__HelloWorld_Pipeline.cs
|__HelloWorld_Executor.cs

* - (note) underscore symbol is added to this example for better visual perception. 
```

## Sitecore generator [alias: sc]

`yo chain:sc --pipeline-name "HelloWorld" --processor-names "AdjustMessageColor LogMessageToConsole"`

Generates for you a structure like this:

```
HelloWorld
|
|__App_Config
|  |__HelloWorld.config
|
|__processors
|  |__AdjustMessageColor.cs
|  |__LogMessageToConsole.cs
|
|__HelloWorld_Arguments.cs
|__HelloWorld_Processor.cs
|__HelloWorld_Messages.cs
|__HelloWorld_Executor.cs

* - (note) underscore symbol is added to this example for better visual perception. 
```

This generator adds a config file which will represent a pipeline in terms of sitecore.

## Options

The program allows you to pass additional options to your generator. This can simplify pipeline generation flow and allow you to skip some questions (note: if you don't provide any of the options which are required by the flow, yeoman generator will ask you to provide them interactively).

|Name|Type|Description|
|:--:|:--:|:---------:|
|**`project-name`**|`{String}`|Name of the generator to use, like: `cs` - represents C# generator, `ts` - represents Typescript generator, `csp` - C# generator with [Pipelines.Net library](https://www.nuget.org/packages/Pipelines.Net/)  or `sc` - Sitecore generator|
|**`program-flow`**|`{String}`|`createCommonFiles` - to create a pipeline with processors or `createProcessor` - to create a single processor|
|**`pipeline-name`**|`{String}`|Name of the generated pipeline|
|**`processor-names`**|`{String}`|Processors generated in dedicated folder, separated by whitespace|
|**`subfolder`**|`{Switch}`|This option specifies whether subfolder for the pipeline must be created, specifying `--no-subfolder` will create all files in the same folder where generator was called|
|**`arguments-members`**|`{String}`|Separated by whitespace list of members, which will be created in arguments file as properties|

## How to get started with Pipeline generator

- Ensure that you've installed:
  - [Node.js](https://nodejs.org/en/) - great runtime, allowing to launch programs written on JavaScript;
  - [Yeoman](http://yeoman.io/) - awesome generator with a bunch of project scuffolding templates, that you have to look at;
- Ensure that you have pipelines generator (on npm it was called generator-chain): `npm install -g generator-chain`
- Run `yo chain` and generator will take you through a creation of your pipeline.
