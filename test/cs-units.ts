'use strict';
import assert = require('assert');
import { GetNamespaceFromFolderNamesExecutor, GetNamespaceFromFolderNamesArguments } from '../src/project/cs/GetNamespaceFromFolderNames';
import { Container } from 'inversify';
import { injectCSharpDependencies } from '../src/project/cs/DependencyInjection/Inject';
import GET_NAMESPACE from '../src/project/cs/GetNamespaceFromFolderNames/ServiceIdentifiers';
import { PipelineExecutor } from 'solid-pipelines';
let container = new Container({ skipBaseClassChecks: true });
injectCSharpDependencies(container);
let getNamespace = container.get<PipelineExecutor>(GET_NAMESPACE.EXECUTOR);

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Unit testing C# project.', () => {
    describe('Getting namespace from a file specified', () => {
        it('Generates a namespace from a project folder path found.', async () => {
            let projectDestination = "D:\\workspace\\Test\\My.Project\\";

            let args = new GetNamespaceFromFolderNamesArguments(
                projectDestination,
                false,
                undefined,
                ["HelloWorld"]
            );
            args.projectDirectory = projectDestination;

            await getNamespace.Execute(args);
            assert.equal(
                args.GetResult(),
                "My.Project.HelloWorld",
                "Namespace must be generated from where a project directory found."
            );
        });

        it('Generates a namespace when all the information is specified.', async () => {
            let projectDestination = "D:\\workspace\\Test\\My.Project\\";

            let args = new GetNamespaceFromFolderNamesArguments(
                projectDestination,
                false,
                projectDestination + "HelloWorld\\Processors\\A.cs",
                ["Extra"]
            );
            args.projectDirectory = projectDestination;

            await getNamespace.Execute(args);
            assert.equal(
                args.GetResult(),
                "My.Project.Extra.HelloWorld.Processors",
                "Namespace must be generated from where a project directory found."
            );
        });
    });

    describe('Getting namespace from a test directory', () => {
        it('Generates a namespace from current directory and subdirectories.', async () => {
            let args = new GetNamespaceFromFolderNamesArguments(
                "D:\\workspace\\test",
                false,
                undefined,
                ["project"]
            );

            await getNamespace.Execute(args);

            assert.equal(
                args.GetResult(),
                "test.project",
                "Namespace must be generated from directory and subdirectories."
            );
        });

        it('Generates a namespace to a file from current directory.', async () => {
            let args = new GetNamespaceFromFolderNamesArguments(
                "D:\\workspace\\test",
                false,
                "D:\\workspace\\test\\subfolder\\arguments\\args.ts");

            let res = await getNamespace.Execute(args);

            assert.equal(
                args.GetResult(),
                "test.subfolder.arguments",
                "Namespace must be generated from current directory and subdirectories of the arguments."
            );
        });
    });
});