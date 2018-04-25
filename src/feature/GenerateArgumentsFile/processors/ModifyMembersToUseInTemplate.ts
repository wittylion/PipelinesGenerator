import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "..";


export class ModifyMembersToUseInTemplate extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new ModifyMembersToUseInTemplate();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        args.members
            = args.members.map(
                member => {
                    if (member.indexOf(':') !== -1) {
                        return member.replace(':', ': ');
                    }

                    return `${member}: string`;
                }
            );
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = args.members.length > 0;
        return safeCondition;
    }
}
