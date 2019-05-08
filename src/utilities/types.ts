// created with ❤ by Yaman Katby at 08 May 2019.

export interface ArrayAPI<T> {
	push: (...elements: T[]) => ArrayAPI<T>;
	unshift: (...elements: T[]) => ArrayAPI<T>;
	pop: (count?: number) => ArrayAPI<T>;
	shift: (count?: number) => ArrayAPI<T>;
	concat: (target: T[]) => ArrayAPI<T>;
	replace: (index: number | PredicateFn<T>, element: T | CallbackFn<T>) => ArrayAPI<T>;
	insertAfter: (index: number | PredicateFn<T>, element: T) => ArrayAPI<T>;
	insertBefore: (index: number | PredicateFn<T>, element: T) => ArrayAPI<T>;
	remove: (index: number | PredicateFn<T>) => ArrayAPI<T>;
}

export type PredicateFn<T> = (element: T) => boolean;
export type CallbackFn<T> = (prevElement: T) => T;
