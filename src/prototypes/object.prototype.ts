// created with ❤ by Yaman Katby at 01 Apr 2019.

import { object } from '../';
import { ITarget } from '../types/object';

// tslint:disable:interface-name
declare global {
  interface Object {
    immutableUpdate: <T>(target: ITarget<T>) => T;
  }
}

const prototype = Object.prototype;

prototype.immutableUpdate = function<T>(target: ITarget<T>): T {
  // @ts-ignore
  return object(this).update(target);
};
