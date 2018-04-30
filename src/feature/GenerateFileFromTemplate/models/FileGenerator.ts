type GenerateFileFromTemplateFunction = (template: string, destination: string, options: {}) => Promise<void>;
type FileFromTemplateGenerator = { generate: GenerateFileFromTemplateFunction };