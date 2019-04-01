// created with ❤ by Yaman Katby at 01 Apr 2019.

import { IIndex } from '../types/array';
import { array } from '..';

// tslint:disable:interface-name
declare global {
  interface Array<T> {
    immutablePush: <T>(...elements: T[]) => T[];
    immutableUnshift: <T>(...elements: T[]) => T[];
    immutablePop: <T>(count?: number) => T[];
    immutableShift: <T>(count?: number) => T[];
    immutableConcat: <T>(target: T[]) => T[];
    immutableReplace: <T>(index: IIndex<T>, element: T) => T[];
    immutableInsertAfter: <T>(index: IIndex<T>, element: T) => T[];
    immutableInsertBefore: <T>(index: IIndex<T>, element: T) => T[];
    immutableRemove: <T>(index: IIndex<T>) => T[];
  }
}

const prototype = Array.prototype;

prototype.immutablePush = function<T>(...elements: T[]): T[] {
  return array(this).push(...elements);
};
prototype.immutableUnshift = function<T>(...elements: T[]): T[] {
  return array(this).unshift(...elements);
};
prototype.immutablePop = function<T>(count?: number): T[] {
  return array(this).pop(count);
};
prototype.immutableShift = function<T>(count?: number): T[] {
  return array(this).shift(count);
};
prototype.immutableConcat = function<T>(target: T[]): T[] {
  return array(this).concat(target);
};
prototype.immutableReplace = function<T>(index: IIndex<T>, element: T): T[] {
  return array(this).replace(index, element);
};
prototype.immutableInsertAfter = function<T>(index: IIndex<T>, element: T): T[] {
  return array(this).insertAfter(index, element);
};
prototype.immutableInsertBefore = function<T>(index: IIndex<T>, element: T): T[] {
  return array(this).insertBefore(index, element);
};
prototype.immutableRemove = function<T>(index: IIndex<T>): T[] {
  return array(this).remove(index);
};
