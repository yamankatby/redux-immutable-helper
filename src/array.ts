// created with ❤ by Yaman Katby at 25 Mar 2019.

import { IArray, IIndex } from '../types/array';

const getIndex = <T>(source: T[], index: IIndex<T>): number => {
  if (typeof index === 'number') {
    return index;
  } else if (typeof index === 'function') {
    return source.findIndex(index);
  }

  throw new Error("Look's like your index nor number neither function.");
};

const array = <T>(source: T[]): IArray<T> => {
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
  const replace = (index: IIndex<T>, element: T): T[] => {
    const indexer = getIndex(source, index);
    return [...source.slice(0, indexer), element, ...source.slice(indexer + 1)];
  };
  const insertAfter = (index: IIndex<T>, element: T): T[] => {
    const indexer = getIndex(source, index);
    return [...source.slice(0, indexer + 1), element, ...source.slice(indexer + 1)];
  };
  const insertBefore = (index: IIndex<T>, element: T): T[] => {
    const indexer = getIndex(source, index);
    return [...source.slice(0, indexer), element, ...source.slice(indexer)];
  };
  const remove = (index: IIndex<T>): T[] => {
    const indexer = getIndex(source, index);
    return [...source.slice(0, indexer), ...source.slice(indexer + 1)];
  };

  return { push, unshift, pop, shift, concat, replace, insertAfter, insertBefore, remove };
};

export default array;
