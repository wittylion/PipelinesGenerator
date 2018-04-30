type EnsureDestinationFunction = (destination: string) => Promise<string>

type DestinationEnsurer = { ensure: EnsureDestinationFunction }
