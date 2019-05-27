// created with ❤ by Yaman Katby at 25 Mar 2019.

import { ArrayAPI, CallbackFn, PredicateFn } from './utilities/types';
import { findIndex, findIndexes } from './utilities/utilities';

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
	const replace = (index: number | PredicateFn<T>, element: T | CallbackFn<T>) => {
		const indexer = findIndex(result, index);
		const target = typeof element === 'function' ? element.call(undefined, result[indexer]) : element;

		result = [...result.slice(0, indexer), target, ...result.slice(indexer + 1)];
		return publicAPI;
	};
	const insertAfter = (index: number | PredicateFn<T>, ...elements: T[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer + 1), ...elements, ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const insertBefore = (index: number | PredicateFn<T>, ...elements: T[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...elements, ...result.slice(indexer)];

		return publicAPI;
	};
	const remove = (index: number | PredicateFn<T>) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const removeAll = (indexes: number[] | PredicateFn<T>) => {
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

array([1, 2, 3])
	.insertAfter(element => element === 3, 4, 5)
	.insertBefore(element => element === 1, 0)
	.push(1,)
	.toArray();