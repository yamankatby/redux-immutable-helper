// created with ❤ by Yaman Katby at 01 Apr 2019.

import { object } from '../src';

test('object.update()', () => {
  const sourceBefore = { a: 1, b: 2, c: 3 };
  const sourceAfter = { a: 1, b: 2, c: 4 };

  expect(
    object(sourceBefore).update({ c: 4 }),
  ).toEqual(sourceAfter);
});
