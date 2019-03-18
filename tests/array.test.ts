import { array } from '../src';

test('Array Push Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5];

  expect(
    array(arrayBefore).push(4, 5),
  ).toEqual(arrayAfter);
});

test('Array Unshift Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [0, 1, 2, 3];

  expect(
    array(arrayBefore).unshift(0),
  ).toEqual(arrayAfter);
});

test('Array Pop Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  expect(
    array(arrayBefore).pop(),
  ).toEqual(arrayAfter);
});

test('Array Shift Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [2, 3];

  expect(
    array(arrayBefore).shift(),
  ).toEqual(arrayAfter);
});

test('Array Concat Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 3, 4, 5, 6];
  const concatArray = [4, 5, 6];

  expect(
    array(arrayBefore).concat(concatArray),
  ).toEqual(arrayAfter);
});

test('Array Replace Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2, 4];

  expect(
    array(arrayBefore).replace((number) => number === 3, 4),
  ).toEqual(arrayAfter);
});

test('Array Remove Method', () => {
  const arrayBefore = [1, 2, 3];
  const arrayAfter = [1, 2];

  expect(
    array(arrayBefore).remove((number) => number === 3),
  ).toEqual(arrayAfter);
});
