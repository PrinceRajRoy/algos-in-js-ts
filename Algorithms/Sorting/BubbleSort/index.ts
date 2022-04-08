import { Utils } from "../../../utils";

// with Subtract
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

// with Add
type BubbleSort2<
  T extends any[] = [],
  Current extends number = 0,
  N extends number = T["length"]
> = Current extends Utils.Subtract<N, 1>
  ? T
  : T extends [infer U, infer V, ...infer Rest]
  ? BubbleSort2<
      Utils.Compare<Utils.Num<U>, Utils.Num<V>> extends true
        ? [V, ...BubbleSort2<[U, ...Rest], Utils.Add<Current, 1>, N>]
        : [U, ...BubbleSort2<[V, ...Rest], Utils.Add<Current, 1>, N>],
      Utils.Add<Current, 1>,
      N
    >
  : [];

type Result1 = BubbleSort<[5, 1, 4, 2, 8, 0, 1, 23]>;
type Result2 = BubbleSort<[4, 9, 78, 41, 2, 23]>;
type Result3 = BubbleSort2<[5, 1, 4, 2, 8, 0, 1, 23]>;
type Result4 = BubbleSort2<[4, 9, 78, 41, 2, 23]>;
