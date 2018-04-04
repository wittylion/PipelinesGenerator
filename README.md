# Pipelines Generator

Pipelines Generator is a yeoman based utility to generate items from SOLID Pipelines packages, like for [C#](https://www.nuget.org/packages/Pipelines.Net/) as well as for [TypeScript](https://www.npmjs.com/package/solid-pipelines). Main goal of this generator is to speed up a process of creating pipelines, by introducing common usage patterns.

## TypeScript generator

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

## C# generator

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

## Options

Note that these options are not required. If you didn't provide any required option, yeoman generator will ask you to provide them interactively.

|Name|Type|Description|
|:--:|:--:|:---------:|
|**[`pipeline-name`](#limit)**|`{String}`|Name of the generated pipeline|
|**[`processor-names`](#mimetype)**|`{String}`|Processors generated in dedicated folder, separated by whitespace|

## Getting Started

- Dependencies:
  - [Node.js](https://nodejs.org/en/)
  - [Yeoman](http://yeoman.io/)
- Install: `npm install -g generator-chain`
- Run Typescript generator: `yo chain:ts`
- Run C# generator: `yo chain:cs`
