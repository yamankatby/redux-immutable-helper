import { object } from '../src';

test('Object Update Method', () => {
  const objectBefore = { foo: 'foo', bar: 'bar' };
  const objectAfter = { foo: 'bar', bar: 'bar' };

  Object.freeze(objectBefore);

  expect(
    object(objectBefore).update('foo', 'bar'),
  ).toEqual(objectAfter);
});
