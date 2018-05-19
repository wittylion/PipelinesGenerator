export type EnsureDestinationFunction = (destination: string) => Promise<string>

export type DestinationEnsurer = { ensure: EnsureDestinationFunction }
