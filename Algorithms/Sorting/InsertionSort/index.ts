namespace Utils {
  type Push<T extends any[], P extends any> = [...T, P];
  type Tuple<N extends number, U extends any[] = []> = U extends { length: N }
    ? U
    : Tuple<N, Push<U, any>>;
  type Length<T extends any[]> = T["length"];
  export type Subtract<N extends number, P extends number> = Tuple<N> extends [
    ...infer V,
    ...Tuple<P>
  ]
    ? Length<V>
    : never;
  export type Add<N extends number, P extends number> = Extract<
    Length<[...Tuple<N>, ...Tuple<P>]>,
    number
  >;
  export type Num<N> = never extends N ? 0 : Extract<N, number>;
  export type Compare<N extends number, P extends number> = P extends N
    ? true
    : Subtract<P, N> extends never
    ? true
    : false;
  export type Slice<
    T extends any[],
    S extends number = 0,
    E extends number = 0,
    Current extends number = 0
  > = T extends [infer U, ...infer Rest]
    ? Compare<Add<Current, 1>, S> extends true
      ? E extends Current
        ? []
        : [U, ...Slice<Rest, S, E, Add<Current, 1>>]
      : Slice<Rest, S, E, Add<Current, 1>>
    : [];
  export type Swap<T extends any[], S extends number, P extends number> = [
    ...Utils.Slice<T, 0, S>,
    T[P],
    ...Slice<T, Add<S, 1>, P>,
    T[S],
    ...Slice<T, Add<P, 1>, T["length"]>
  ];
  export type Assign<T extends any[], S extends number, P extends any> = [
    ...Slice<T, 0, S>,
    P,
    ...Slice<T, Add<S, 2>, T["length"]>
  ];
}

type InsertionSort<
  T extends any[] = [],
  Current extends number = 1,
  J extends number = Utils.Subtract<Current, 1>,
  TCurrent extends number = T[Current]
> = Current extends T["length"]
  ? T
  : Utils.Compare<J, 0> extends true
  ? Utils.Compare<T[J], TCurrent> extends true
    ? InsertionSort<Utils.Assign<T, Utils.Add<J, 1>, T[J]>, Current, Utils.Subtract<J, 1>, TCurrent>
    : InsertionSort<Utils.Assign<T, Utils.Add<J, 1>, TCurrent>, Utils.Add<Current, 1>>
  : InsertionSort<Utils.Assign<T, 0, TCurrent>, Utils.Add<Current, 1>>;

//@ts-ignore
type Result1 = InsertionSort<[56, 10, 1, 35, 0, 4, 30, 7, 15]>;

//@ts-ignore
type Result2 = InsertionSort<[5, 1, 4, 2, 8, 0, 1, 23]>;
