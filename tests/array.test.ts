// created with ❤ by Yaman Katby at 25 Mar 2019.

import { array, deepFreeze } from '../src';

it('can add new element to the end of the array', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(
		array(source)
			.push(4, 5)
			.toArray(),
	).toEqual(target);
});

it('can add multi elements to the end of the array', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 3, 4, 5, 6, 7];

	deepFreeze(source);
	expect(
		array(source)
			.push(4, 5, 6, 7)
			.toArray(),
	).toEqual(target);
});

it('can add new element to the beginning of the array', () => {
	const source = [1, 2, 3];
	const target = [0, 1, 2, 3];

	deepFreeze(source);
	expect(
		array(source)
			.unshift(0)
			.toArray(),
	).toEqual(target);
});

it('can add multi elements to the beginning of the array', () => {
	const source = [1, 2, 3];
	const target = [-2, -1, 0, 1, 2, 3];

	deepFreeze(source);
	expect(
		array(source)
			.unshift(-2, -1, 0)
			.toArray(),
	).toEqual(target);
});

it('can remove element form the end of the array', () => {
	const source = [1, 2, 3];
	const target = [1, 2];

	deepFreeze(source);
	expect(
		array(source)
			.pop()
			.toArray(),
	).toEqual(target);
});

it('can remove multi elements form the end of the array', () => {
	const source = [1, 2, 3];
	const target = [1];

	deepFreeze(source);
	expect(
		array(source)
			.pop(2)
			.toArray(),
	).toEqual(target);
});

it('can remove element from the beginning of the array', () => {
	const source = [1, 2, 3];
	const target = [2, 3];

	deepFreeze(source);
	expect(
		array(source)
			.shift()
			.toArray(),
	).toEqual(target);
});

it('can remove multi elements from the beginning of the array', () => {
	const source = [1, 2, 3];
	const target = [3];

	deepFreeze(source);
	expect(
		array(source)
			.shift(2)
			.toArray(),
	).toEqual(target);
});

it('can concat tow arrays together', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 3, 4, 5, 6];

	deepFreeze(source);
	expect(
		array(source)
			.concat([4, 5, 6])
			.toArray(),
	).toEqual(target);
});

it('can replace an element with another by explicit index and explicit element', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 4];

	deepFreeze(source);
	expect(
		array(source)
			.replace(2, 4)
			.toArray(),
	).toEqual(target);
});

it('can replace an element with another by implicit index and explicit element', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 4];

	deepFreeze(source);
	expect(
		array(source)
			.replace(element => element === 3, 4)
			.toArray(),
	).toEqual(target);
});

it('can replace an element with another by explicit index and implicit element', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 4];

	deepFreeze(source);
	expect(
		array(source)
			.replace(2, (prevElement: number) => prevElement + 1)
			.toArray(),
	).toEqual(target);
});

it('can replace an element with another by implicit index and implicit element', () => {
	const source = [1, 2, 3];
	const target = [1, 2, 4];

	deepFreeze(source);
	expect(
		array(source)
			.replace(element => element === 3, (prevElement: number) => prevElement + 1)
			.toArray(),
	).toEqual(target);
});

it('can insert an element after another element by explicit index', () => {
	const source = [1, 2, 4];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(
		array(source)
			.insertAfter(1, 3)
			.toArray(),
	).toEqual(target);
});

it('can insert an element after another element by implicit index', () => {
	const source = [1, 2, 4];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(
		array(source)
			.insertAfter(number => number === 2, 3)
			.toArray(),
	).toEqual(target);
});

it('can insert element before another element by explicit index', () => {
	const source = [1, 2, 4];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(
		array(source)
			.insertBefore(2, 3)
			.toArray(),
	).toEqual(target);
});

it('can insert element before another element by implicit index', () => {
	const source = [1, 2, 4];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(
		array(source)
			.insertBefore(number => number === 4, 3)
			.toArray(),
	).toEqual(target);
});

it('can remove element from the array by explicit index', () => {
	const source = [1, 2, 3];
	const target = [1, 2];

	deepFreeze(source);
	expect(
		array(source)
			.remove(2)
			.toArray(),
	).toEqual(target);
});

it('can remove element from the array by implicit index', () => {
	const source = [1, 2, 3];
	const target = [1, 2];

	deepFreeze(source);
	expect(
		array(source)
			.remove(number => number === 3)
			.toArray(),
	).toEqual(target);
});
