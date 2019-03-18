const findIndex = <T>(target: T[], expression: number | ((T: any) => boolean)): number => {
  if (typeof expression === 'number') {
    return expression;
  } else if (typeof expression === 'function') {
    return target.findIndex(expression);
  }

  return -1;
};

const array = <T>(target: T[]) => {
  const push = (...elements: T[]): T[] => {
    return [...target, ...elements];
  };
  const unshift = (...elements: T[]): T[] => {
    return [...elements, ...target];
  };

  const pop = (count: number = 1): T[] => {
    return target.slice(0, target.length - count);
  };
  const shift = (count: number = 1): T[] => {
    return target.slice(count);
  };

  const concat = (newArray: T[]): T[] => {
    return push(...newArray);
  };

  const replace = (expression: number | ((element: T) => boolean), element: T): T[] => {
    const index = findIndex(target, expression);
    if (index === -1) {
      return target;
    }

    return [...target.slice(0, index), element, ...target.slice(index + 1)];
  };
  const remove = (expression: number | ((element: T) => boolean)): T[] => {
    const index = findIndex(target, expression);
    if (index === -1) {
      return target;
    }

    return [...target.slice(0, index), ...target.slice(index + 1)];
  };

  return { push, unshift, pop, shift, concat, replace, remove };
};

export default array;
