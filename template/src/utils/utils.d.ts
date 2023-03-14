export type Value<T> = T[keyof T];

export type ExtractProps<T> = T extends
  | React.Component<infer P>
  | React.FC<infer P>
  ? P
  : never;

type Callback = (...args: unknown[]) => void;
