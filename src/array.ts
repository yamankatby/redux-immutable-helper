// created with ❤ by Yaman Katby at 25 Mar 2019.

import { CallbackFn, PredicateFn } from './utilities/types';
import { indexify } from './utilities/utilities';

export const push = <T>(source: T[], ...elements: T[]): T[] => {
  return [...source, ...elements];
};

export const unshift = <T>(source: T[], ...elements: T[]): T[] => {
  return [...elements, ...source];
};

export const pop = <T>(source: T[], count: number = 1): T[] => {
  return source.slice(0, source.length - count);
};

export const shift = <T>(source: T[], count: number = 1): T[] => {
  return source.slice(count);
};

export const concat = <T>(source: T[], target: T[]): T[] => {
  return push(source, ...target);
};

export const replace = <T>(source: T[], index: number | PredicateFn<T>, element: T | CallbackFn<T>): T[] => {
  const indexer = indexify(source, index);
  const target = typeof element === 'function' ? element.call(undefined, source[indexer]) : element;

  return [...source.slice(0, indexer), target, ...source.slice(indexer + 1)];
};

export const insertAfter = <T>(source: T[], index: number | PredicateFn<T>, element: T): T[] => {
  const indexer = indexify(source, index);
  return [...source.slice(0, indexer + 1), element, ...source.slice(indexer + 1)];
};

export const insertBefore = <T>(source: T[], index: number | PredicateFn<T>, element: T): T[] => {
  const indexer = indexify(source, index);
  return [...source.slice(0, indexer), element, ...source.slice(indexer)];
};

export const remove = <T>(source: T[], index: number | PredicateFn<T>): T[] => {
  const indexer = indexify(source, index);
  return [...source.slice(0, indexer), ...source.slice(indexer + 1)];
};

const array = <T>(source: T[]) => {
  if (!Array.isArray(source)) {
    new TypeError(`Look's like that your source type isn't array.`);
  }

  const publicAPI = {
    push: (...elements: T[]) => push(source, ...elements),
    unshift: (...elements: T[]) => unshift(source, ...elements),
    pop: (count: number = 1) => pop(source, count),
    shift: (count: number = 1) => shift(source, count),
    concat: (target: T[]) => concat(source, target),
    replace: (index: number | PredicateFn<T>, element: T | CallbackFn<T>) => replace(source, index, element),
    insertAfter: (index: number | PredicateFn<T>, element: T) => insertAfter(source, index, element),
    insertBefore: (index: number | PredicateFn<T>, element: T) => insertBefore(source, index, element),
    remove: (index: number | PredicateFn<T>) => remove(source, index),
  };

  return publicAPI;
};

export default array;