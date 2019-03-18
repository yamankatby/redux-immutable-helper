const findIndex = (array: Array<any>, expression: number | ((element: any) => boolean)): number => {
	if (typeof expression === 'number') return expression;
	else if (typeof expression === 'function') return array.findIndex(expression);

	return -1;
};

const array = <T>(array: Array<T>) => {
	const push = (...elements: Array<T>): Array<T> => {
		return [...array, ...elements];
	};
	const unshift = (...elements: Array<T>): Array<T> => {
		return [...elements, ...array];
	};

	const pop = (count: number = 1): Array<T> => {
		return array.slice(0, array.length - count);
	};
	const shift = (count: number = 1): Array<T> => {
		return array.slice(count);
	};

	const concat = (newArray: Array<T>): Array<T> => {
		return push(...newArray);
	};

	const replace = (expression: number | ((element: T) => boolean), element: T): Array<T> => {
		const index = findIndex(array, expression);
		if (index === -1) return array;

		return [
			...array.slice(0, index),
			element,
			...array.slice(index + 1),
		];
	};
	const remove = (expression: number | ((element: T) => boolean)): Array<T> => {
		const index = findIndex(array, expression);
		if (index === -1) return array;

		return [
			...array.slice(0, index),
			...array.slice(index + 1),
		];
	};

	return { push, unshift, pop, shift, concat, replace, remove };
};

export default array;
