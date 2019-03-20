import { array } from '../src';

test('Array Push Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).push(4, 5),
  ).toEqual(arrayAfter);
});

test('Array Unshift Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [0, 1, 2, 3];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).unshift(0),
  ).toEqual(arrayAfter);
});

test('Array Pop Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).pop(),
  ).toEqual(arrayAfter);
});

test('Array Shift Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [2, 3];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).shift(),
  ).toEqual(arrayAfter);
});

test('Array Concat Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5, 6];
  const concatArray = [4, 5, 6];

  Object.freeze(arrayBefore);
  Object.freeze(concatArray);

  expect(
    array(arrayBefore).concat(concatArray),
  ).toEqual(arrayAfter);
});

test('Array Replace Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 4];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).replace((number) => number === 3, 4),
  ).toEqual(arrayAfter);
});

test('Array Remove Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  Object.freeze(arrayBefore);

  expect(
    array(arrayBefore).remove((number) => number === 3),
  ).toEqual(arrayAfter);
});
