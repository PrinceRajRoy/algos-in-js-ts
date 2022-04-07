import { Utils } from "../../../utils";

type BubbleSort<
  T extends any[] = [],
  Current extends number = T["length"]
> = Current extends 1
  ? T
  : T extends [infer U, infer V, ...infer Rest]
  ? BubbleSort<
      Utils.Compare<Utils.Num<U>, Utils.Num<V>> extends true
        ? [V, ...BubbleSort<[U, ...Rest], Utils.Subtract<Current, 1>>]
        : [U, ...BubbleSort<[V, ...Rest], Utils.Subtract<Current, 1>>],
      Utils.Subtract<Current, 1>
    >
  : [];

type Result1 = BubbleSort<[5, 1, 4, 2, 8, 0, 1, 23]>;
type Result = BubbleSort<[4, 9, 78, 41, 2, 23]>;
