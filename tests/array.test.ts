// created with ❤ by Yaman Katby at 25 Mar 2019.

import { array } from '../src';

test('array.push()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).push(4, 5),
  ).toEqual(arrayAfter);
});

test('array.unshift()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [0, 1, 2, 3];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).unshift(0),
  ).toEqual(arrayAfter);
});

test('array.pop()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).pop(),
  ).toEqual(arrayAfter);
});

test('array.shift()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [2, 3];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).shift(),
  ).toEqual(arrayAfter);
});

test('array.concat()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5, 6];
  const concatArray = [4, 5, 6];

  Object.freeze(arrayBefore);
  Object.freeze(concatArray);

  expect(
    array(arrayBefore).concat(concatArray),
  ).toEqual(arrayAfter);
});

test('array.replace()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 4];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).replace((number) => number === 3, 4),
  ).toEqual(arrayAfter);
});

test('array.remove()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).remove((number) => number === 3),
  ).toEqual(arrayAfter);
});

test('array.insertAfter()', () => {
  const arrayBefore = [1, 2, 4];
  const arrayAfter = [1, 2, 3, 4];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).insertAfter((number) => number === 2, 3),
  ).toEqual(arrayAfter);
});

test('array.insertBefore()', () => {
  const arrayBefore = [1, 2, 4];
  const arrayAfter = [1, 2, 3, 4];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).insertBefore((number) => number === 4, 3),
  ).toEqual(arrayAfter);
});
