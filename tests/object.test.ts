// created with ❤ by Yaman Katby at 01 Apr 2019.

import { object } from '../src';

test('object.update()', () => {
  const targetBefore = { a: 1, b: 2, c: 3 };
  const targetAfter = { a: 1, b: 2, c: 4 };

  expect(
    object(targetBefore).update((prevTarget: any) => ({ c: prevTarget.c + 1 })),
  ).toEqual(targetAfter);
});
