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

	replace(index: number, callbackfn: CallbackFn<T>): ArrayAPI<T>;

	replace(predicate: PredicateFn<T>, element: T): ArrayAPI<T>;

	replace(predicate: PredicateFn<T>, callbackfn: CallbackFn<T>): ArrayAPI<T>;

	insertAfter(index: number, element: T): ArrayAPI<T>;

	insertAfter(predicate: PredicateFn<T>, element: T): ArrayAPI<T>;

	insertBefore(index: number, element: T): ArrayAPI<T>;

	insertBefore(predicate: PredicateFn<T>, element: T): ArrayAPI<T>;

	remove(index: number): ArrayAPI<T>;

	remove(predicate: PredicateFn<T>): ArrayAPI<T>;

	toArray(): T[];
}

export type PredicateFn<T> = (element: T) => boolean;
export type CallbackFn<T> = (prevElement: T) => T;
