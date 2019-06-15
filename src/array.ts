// created with ❤ by Yaman Katby at 25 Mar 2019.

import { findIndex, findIndexes } from './utilities';

interface ArrayAPI<S> {
	push(...elements: S[]): ArrayAPI<S>;

	unshift(...elements: S[]): ArrayAPI<S>;

	pop(): ArrayAPI<S>;

	pop(count: number): ArrayAPI<S>;

	shift(): ArrayAPI<S>;

	shift(count: number): ArrayAPI<S>;

	concat(target: S[]): ArrayAPI<S>;

	replace(index: number, element: S): ArrayAPI<S>;

	replace(index: number, callbackfn: ((prevElement: S) => S)): ArrayAPI<S>;

	replace(predicate: ((element: S) => boolean), element: S): ArrayAPI<S>;

	replace(predicate: ((element: S) => boolean), callbackfn: ((prevElement: S) => S)): ArrayAPI<S>;

	insertAfter(index: number, element: S): ArrayAPI<S>;

	insertAfter(index: number, ...elements: S[]): ArrayAPI<S>;

	insertAfter(predicate: ((element: S) => boolean), element: S): ArrayAPI<S>;

	insertAfter(predicate: ((element: S) => boolean), ...elements: S[]): ArrayAPI<S>;

	insertBefore(index: number, element: S): ArrayAPI<S>;

	insertBefore(index: number, ...elements: S[]): ArrayAPI<S>;

	insertBefore(predicate: ((element: S) => boolean), element: S): ArrayAPI<S>;

	insertBefore(predicate: ((element: S) => boolean), ...elements: S[]): ArrayAPI<S>;

	remove(index: number): ArrayAPI<S>;

	remove(predicate: ((element: S) => boolean)): ArrayAPI<S>;

	removeAll(indexes: number[]): ArrayAPI<S>;

	removeAll(predicate: ((element: S) => boolean)): ArrayAPI<S>;

	toArray(): S[];
}

export const array = <S = any>(source: S[]): ArrayAPI<S> => {
	if (source === undefined || !Array.isArray(source)) {
		new TypeError(`Looks like the first parameter that you have passed to the array function isn't an array.`);
	}

	let result: S[] = source.slice();

	// Insert and Remove elements
	const push = (...elements: S[]) => {
		result = [...result, ...elements];
		return publicAPI;
	};
	const unshift = (...elements: S[]) => {
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

	// Insert Elements
	const concat = (target: S[]) => {
		result = [...result, ...target];
		return publicAPI;
	};
	const replace = (index: number | ((element: S) => boolean), element: S | ((prevElement: S) => S)) => {
		const indexer = findIndex(result, index);
		const target = typeof element === 'function' ? element.call(undefined, result[indexer]) : element;

		result = [...result.slice(0, indexer), target, ...result.slice(indexer + 1)];
		return publicAPI;
	};
	const insertAfter = (index: number | ((element: S) => boolean), ...elements: S[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer + 1), ...elements, ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const insertBefore = (index: number | ((element: S) => boolean), ...elements: S[]) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...elements, ...result.slice(indexer)];

		return publicAPI;
	};

	// Remove Elements
	const remove = (index: number | ((element: S) => boolean)) => {
		const indexer = findIndex(result, index);
		result = [...result.slice(0, indexer), ...result.slice(indexer + 1)];

		return publicAPI;
	};
	const removeAll = (indexes: number[] | ((element: S) => boolean)) => {
		const indexer = findIndexes(result, indexes).sort().reverse();
		indexer.forEach((index) => {
			result = [...result.slice(0, index), ...result.slice(index + 1)];
		});

		return publicAPI;
	};

	// Return array
	const toArray = (): S[] => {
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
