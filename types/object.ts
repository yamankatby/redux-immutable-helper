export interface IObject<T> {
  update: (target: ITarget<T>) => T
}

export type ITarget<T> = T | ((prevSource: T) => T);

