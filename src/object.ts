const object = <T>(object: T) => {
	const update = (key: string, newValue: any): T => {
		const updatedObject = object;
		// @ts-ignore
		updatedObject[key] = newValue;

		return updatedObject;
	};

	return { update };
};

export default object;
