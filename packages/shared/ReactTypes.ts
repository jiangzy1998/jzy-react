// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Type = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Key = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Ref = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElementType = any;

export interface ReactElementType {
  $$typeof: symbol | number;
  type: ElementType;
  key: Key;
  ref: Ref;
  props: Props;
  __mark: string;
}
