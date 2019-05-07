// created with ❤ by Yaman Katby at 01 Apr 2019.

import { IObject, ITarget } from './types/object';

const getTarget = <T>(target: ITarget<T>, prevSource: T): T => {
  if (typeof target === 'object') {
    return target;
  } else if (typeof target === 'function') {
    // @ts-ignore
    return target(prevSource);
  }

  throw new Error('Look\'s like your target not object neither function.');
};

const object = <T>(source: T): IObject<T> => {
  if (typeof source !== 'object') {
    new TypeError(`Look's like that your source type isn't array.`);
  }

  const update = (target: ITarget<T>): T => {
    return { ...source, ...getTarget(target, source) };
  };

  return { update };
};

export default object;
