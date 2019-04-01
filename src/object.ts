// created with ❤ by Yaman Katby at 01 Apr 2019.

export type Expression<T> = T | ((prevTarget: T) => T) | any;

const findTarget = <T>(expression: Expression<T>, prevTarget: T): T => {
  if (typeof expression === 'object') {
    return expression;
  } else if (typeof expression === 'function') {
    return expression({ ...prevTarget });
  }

  throw new Error('Make sure that you pass an Object or Function');
};

const object = <T>(target: T) => {
  const update = (expression: Expression<T>) => {
    const updatedTarget = findTarget(expression, target);
    return { ...target, ...updatedTarget };
  };

  return { update };
};

export default object;
