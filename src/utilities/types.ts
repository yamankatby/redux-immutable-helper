// created with ❤ by Yaman Katby at 08 May 2019.

export interface ArrayAPI<T> {
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

export type PredicateFn<T> = (element: T) => boolean;
export type CallbackFn<T> = (prevElement: T) => T;
