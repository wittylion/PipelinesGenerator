export type CheckFileExistanceFunction = (path: string) => Promise<boolean>;
export type FileExistanceChecker = { check: CheckFileExistanceFunction };