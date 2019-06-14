// created with ❤ by Yaman Katby at 25 Mar 2019.

import { findIndex, findIndexes } from './utilities';

interface ArrayAPI<T> {
	push(...elements: T[]): ArrayAPI<T>;

	unshift(...elements: T[]): ArrayAPI<T>;

	pop(): ArrayAPI<T>;

	pop(count: number): ArrayAPI<T>;

	shift(): ArrayAPI<T>;

	shift(count: number): ArrayAPI<T>;

	concat(target: T[]): ArrayAPI<T>;

	replace(index: number, element: T): ArrayAPI<T>;

	replace(index: number, callbackfn: ((prevElement: T) => T)): ArrayAPI<T>;

	replace(predicate: ((element: T) => boolean), element: T): ArrayAPI<T>;

	replace(predicate: ((element: T) => boolean), callbackfn: ((prevElement: T) => T)): ArrayAPI<T>;

	insertAfter(index: number, element: T): ArrayAPI<T>;

	insertAfter(index: number, ...elements: T[]): ArrayAPI<T>;

	insertAfter(predicate: ((element: T) => boolean), element: T): ArrayAPI<T>;

	insertAfter(predicate: ((element: T) => boolean), ...elements: T[]): ArrayAPI<T>;

	insertBefore(index: number, element: T): ArrayAPI<T>;

	insertBefore(index: number, ...elements: T[]): ArrayAPI<T>;

	insertBefore(predicate: ((element: T) => boolean), element: T): ArrayAPI<T>;

	insertBefore(predicate: ((element: T) => boolean), ...elements: T[]): ArrayAPI<T>;

	remove(index: number): ArrayAPI<T>;

	remove(predicate: ((element: T) => boolean)): ArrayAPI<T>;

	removeAll(indexes: number[]): ArrayAPI<T>;

	removeAll(predicate: ((element: T) => boolean)): ArrayAPI<T>;

	toArray(): T[];
}

export const array = <T = any>(source: T[]): ArrayAPI<T> => {
	if (source === undefined || !Array.isArray(source)) {
		new TypeError(`Looks like the first parameter that you have passed to the array function isn't an array.`);
	}

	let result: T[] = source.slice();

	const push = (...elements: T[]) => {
		result = [...result, ...elements];
		return publicAPI;
	};
	const unshift = (...elements: T[]) => {
		result = [...elements, ...result];
		return publicAPI;
	};
	const pop = (count: number = 1) => {
		result = result.slice(0, result.length - count);
		return publicAPI;
	};
	const shift = (count: number = 1) => {
		result = result.slice(count);
		return publicAPI;
	};
	const concat = (target: T[]) => {
		result = [...result, ...target];
		return publicAPI;
	};
	const replace = (index: number | ((element: T) => boolean), element: T | ((prevElement: T) => T)) => {
		const indexer = findIndex(result, index);
		const target = typeof element === 'function' ? element.call(undefined, result[indexer]) : element;

		result = [...result.slice(0, indexer), target, ...result.slice(indexer + 1)];
		return publicAPI;
	};
	const insertAfter = (index: number | ((element: T) => boolean), ...elements: T[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer + 1), ...elements, ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const insertBefore = (index: number | ((element: T) => boolean), ...elements: T[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...elements, ...result.slice(indexer)];

		return publicAPI;
	};
	const remove = (index: number | ((element: T) => boolean)) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const removeAll = (indexes: number[] | ((element: T) => boolean)) => {
		const indexer = findIndexes(result, indexes).sort().reverse();
		indexer.forEach((index) => {
			result = [...result.slice(0, index), ...result.slice(index + 1)];
		});

		return publicAPI;
	};
	const toArray = (): T[] => {
		return result;
	};

	const publicAPI = {
		push,
		unshift,
		pop,
		shift,
		concat,
		replace,
		insertAfter,
		insertBefore,
		remove,
		removeAll,
		toArray,
	};
	return publicAPI;
};
