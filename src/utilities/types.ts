export interface ArrayPublicAPI<T> {
  push: (...elements: T[]) => T[];
  unshift: (...elements: T[]) => T[];
  pop: (count?: number) => T[];
  shift: (count?: number) => T[];
  concat: (target: T[]) => T[];
  replace: (index: number | PredicateFn<T>, element: T | CallbackFn<T>) => T[];
  insertAfter: (index: number | PredicateFn<T>, element: T) => T[];
  insertBefore: (index: number | PredicateFn<T>, element: T) => T[];
  remove: (index: number | PredicateFn<T>) => T[];
}

export type PredicateFn<T> = ((element: T) => boolean);
export type CallbackFn<T> = ((prevElement: T) => T);