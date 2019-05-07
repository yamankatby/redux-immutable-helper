// created with ❤ by Yaman Katby at 25 Mar 2019.

import { ArrayAPI, CallbackFn, PredicateFn } from './utilities/types';
import { indexify } from './utilities/utilities';

export const array = (function arrayFactory<T>() {
	let value: T[] = [];

	const push = (...elements: T[]): ArrayAPI<T> => {
		value = [...value, ...elements];
		return publicAPI;
	};
	const unshift = (...elements: T[]): ArrayAPI<T> => {
		value = [...elements, ...value];
		return publicAPI;
	};
	const pop = (count: number = 1): ArrayAPI<T> => {
		value = value.slice(0, value.length - count);
		return publicAPI;
	};
	const shift = (count: number = 1): ArrayAPI<T> => {
		value = value.slice(count);
		return publicAPI;
	};
	const concat = (target: T[]): ArrayAPI<T> => {
		value = [...value, ...target];
		return publicAPI;
	};
	const replace = (index: number | PredicateFn<T>, element: T | CallbackFn<T>): ArrayAPI<T> => {
		const indexer = indexify(value, index);
		const target = typeof element === 'function' ? element.call(undefined, value[indexer]) : element;

		value = [...value.slice(0, indexer), target, ...value.slice(indexer + 1)];
		return publicAPI;
	};
	const insertAfter = (index: number | PredicateFn<T>, element: T): ArrayAPI<T> => {
		const indexer = indexify(value, index);
		value = [...value.slice(0, indexer + 1), element, ...value.slice(indexer + 1)];

		return publicAPI;
	};
	const insertBefore = (index: number | PredicateFn<T>, element: T): ArrayAPI<T> => {
		const indexer = indexify(value, index);
		value = [...value.slice(0, indexer), element, ...value.slice(indexer)];

		return publicAPI;
	};
	const remove = (index: number | PredicateFn<T>): ArrayAPI<T> => {
		const indexer = indexify(value, index);
		value = [...value.slice(0, indexer), ...value.slice(indexer + 1)];

		return publicAPI;
	};
	const toArray = (): T[] => {
		return value;
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
		toArray
	};

	return (source: T[]) => {
		if (!Array.isArray(source)) {
			new TypeError(`Look's like that your source type isn't array.`);
		}

		value = source.slice();
		return publicAPI;
	};
})();
