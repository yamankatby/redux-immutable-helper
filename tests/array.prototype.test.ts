// created with ❤ by Yaman Katby at 01 Apr 2019.

import '../src/prototypes';

test('array.prototype.immutablePush()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutablePush(4, 5),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableUnshift()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [0, 1, 2, 3];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableUnshift(0),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutablePop()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutablePop(),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableShift()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [2, 3];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableShift(),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableConcat()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5, 6];
  const concatArray = [4, 5, 6];

  Object.freeze(arrayBefore);
  Object.freeze(concatArray);

  expect(
    arrayBefore.immutableConcat(concatArray),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableReplace()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 4];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableReplace((number) => number === 3, 4),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableInsertAfter()', () => {
  const arrayBefore = [1, 2, 4];
  const arrayAfter = [1, 2, 3, 4];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableInsertAfter((number) => number === 2, 3),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableInsertBefore()', () => {
  const arrayBefore = [1, 2, 4];
  const arrayAfter = [1, 2, 3, 4];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableInsertBefore((number) => number === 4, 3),
  ).toEqual(arrayAfter);
});

test('array.prototype.immutableRemove()', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    arrayBefore.immutableRemove((number) => number === 3),
  ).toEqual(arrayAfter);
});
