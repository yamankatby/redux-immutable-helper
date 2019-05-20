// created with ❤ by Yaman Katby at 08 May 2019.

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

export const findIndex = <T>(source: T[], index: number | ((element: T) => boolean)) => {
	if (typeof index !== 'number' && typeof index !== 'function') {
		throw new TypeError('Look\'s like your index nor number neither function.');
	}

	return typeof index === 'function' ? source.findIndex(index) : index;
};

export const findIndexes = <T>(source: T[], indexes: number[] | ((element: T) => boolean)) => {
	if (typeof indexes !== 'function' && !Array.isArray(indexes)) {
		throw new TypeError('Look\'s like your index nor array of numbers neither function.');
	}

	if (typeof indexes === 'function') {
		const indexList: number[] = [];
		source.forEach((value, index) => {
			if (indexes(value)) {
				indexList.push(index);
			}
		});

		return indexList;
	}

	return indexes;
};