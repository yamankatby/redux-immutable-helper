const object = <T>(target: T) => {
  const update = (key: string, newValue: any): T => {
    const updatedObject = target;
    // @ts-ignore
    updatedObject[key] = newValue;

    return updatedObject;
  };

  return { update };
};

export default object;
