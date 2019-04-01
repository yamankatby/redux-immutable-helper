import '../src/prototypes';

test('object.prototype.update()', () => {
  const sourceBefore = { a: 1, b: 2, c: 3 };
  const sourceAfter = { a: 1, b: 2, c: 4 };

  expect(
    sourceBefore.immutableUpdate({ c: 4 }),
  ).toEqual(sourceAfter);
});
