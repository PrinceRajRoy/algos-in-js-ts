export namespace Utils {
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
  export type Num<N> = Extract<N, number>;
  export type Compare<N extends number, P extends number> = P extends N
    ? false
    : Subtract<P, N> extends never
    ? true
    : false;
}
