export class Configuration {
  appName: string = 'MyApp';
}

export class Configuration2 {
  static appName: string = 'MyApp';
}

export type ServesStatus = 'online' | 'offline' | 'unknown';
