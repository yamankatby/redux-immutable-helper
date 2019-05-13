// created with ❤ by Yaman Katby at 08 May 2019.

import { PredicateFn } from './types';

export const forEachKey = <T>(source: T, callbackFn: (key: keyof T, value: any, index: number) => void) => {
	Object.getOwnPropertyNames(source).forEach((_, index) => {
		const key = _ as keyof T;
		callbackFn(key, source[key], index);
	});
};

export const deepFreeze = <T>(source: T) => {
	if (typeof source !== 'object' || source === null) {
		return;
	}

	Object.freeze(source);

	forEachKey(source, (key, value) => {
		if (source.hasOwnProperty(key) && typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
			deepFreeze(source[key]);
		}
	});
};

export const deepClone = <T>(source: T): T => {
	if (typeof source !== 'object' || source === null) {
		return source;
	}

	let value;
	if (Array.isArray(source)) {
		value = [];
		source.forEach((element) => {
			value.push(deepClone(element));
		});
	} else {
		value = {};
		forEachKey(source, (key, value) => {
			value[key] = deepClone(value);
		});
	}

	return value as T;
};

export const indexify = <T>(source: T[], index: number | PredicateFn<T>): number => {
	if (typeof index !== 'number' && typeof index !== 'function') {
		throw new Error("Look's like your index nor number neither function.");
	}

	return typeof index === 'number' ? index : source.findIndex(index);
};
