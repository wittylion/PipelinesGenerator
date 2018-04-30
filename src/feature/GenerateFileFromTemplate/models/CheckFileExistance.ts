type CheckFileExistanceFunction = (path: string) => Promise<boolean>;
type FileExistanceChecker = { check: CheckFileExistanceFunction };