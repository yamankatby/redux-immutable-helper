export const deepFreeze = (source: Object | Array<any>) => {
  Object.freeze(source);
};