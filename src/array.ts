// created with ❤ by Yaman Katby at 25 Mar 2019.

import { CallbackFn, IArray, PredicateFn } from './utilities/types';
import { indexify } from './utilities/utilities';

const array = <T>(source: T[]): IArray<T> => {
  if (!Array.isArray(source)) {
    new TypeError(`Look's like that your source type isn't array.`);
  }

  const push = (...elements: T[]): T[] => {
    return [...source, ...elements];
  };
  const unshift = (...elements: T[]): T[] => {
    return [...elements, ...source];
  };
  const pop = (count: number = 1): T[] => {
    return source.slice(0, source.length - count);
  };
  const shift = (count: number = 1): T[] => {
    return source.slice(count);
  };
  const concat = (target: T[]): T[] => {
    return push(...target);
  };
  const replace = (index: number | PredicateFn<T>, element: T | CallbackFn<T>): T[] => {
    const indexer = indexify(source, index);
    const target = typeof element === 'function' ? element.call(undefined, source[indexer]) : element;
    return [...source.slice(0, indexer), target, ...source.slice(indexer + 1)];
  };
  const insertAfter = (index: number | PredicateFn<T>, element: T): T[] => {
    const indexer = indexify(source, index);
    return [...source.slice(0, indexer + 1), element, ...source.slice(indexer + 1)];
  };
  const insertBefore = (index: number | PredicateFn<T>, element: T): T[] => {
    const indexer = indexify(source, index);
    return [...source.slice(0, indexer), element, ...source.slice(indexer)];
  };
  const remove = (index: number | PredicateFn<T>): T[] => {
    const indexer = indexify(source, index);
    return [...source.slice(0, indexer), ...source.slice(indexer + 1)];
  };

  return { push, unshift, pop, shift, concat, replace, insertAfter, insertBefore, remove };
};

export default array;