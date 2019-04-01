export interface IObject<T> {
  update: (target: ITarget<T | any>) => T;
}

export type ITarget<T> = T | ((prevSource: T) => T);
