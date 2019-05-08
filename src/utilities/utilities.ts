// created with ❤ by Yaman Katby at 08 May 2019.

import { PredicateFn } from './types';

export const deepFreeze = (source: any) => {
	if (typeof source !== 'object' || source === null) {
		return;
	}

	Object.freeze(source);

	Object.getOwnPropertyNames(source).forEach(key => {
		if (
			source.hasOwnProperty(key) &&
			typeof source[key] === 'object' &&
			source[key] !== null &&
			!Object.isFrozen(source[key])
		) {
			deepFreeze(source[key]);
		}
	});
};

export const indexify = <T>(source: T[], index: number | PredicateFn<T>): number => {
	if (typeof index !== 'number' && typeof index !== 'function') {
		throw new Error('Look\'s like your index nor number neither function.');
	}

	return typeof index === 'number' ? index : source.findIndex(index);
};
