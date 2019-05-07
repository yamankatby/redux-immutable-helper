export interface IArray<T> {
  push: (...elements: T[]) => T[];
  unshift: (...elements: T[]) => T[];
  pop: (count?: number) => T[];
  shift: (count?: number) => T[];
  concat: (target: T[]) => T[];
  replace: (index: IIndex<T>, element: T | ((prevElement: T) => T)) => T[];
  insertAfter: (index: IIndex<T>, element: T) => T[];
  insertBefore: (index: IIndex<T>, element: T) => T[];
  remove: (index: IIndex<T>) => T[];
}

export type IIndex<T> = number | ((element: T) => boolean);
