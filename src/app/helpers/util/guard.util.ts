
export const isExistInEnum = <E>(object: E, value: string): boolean => !!(Object.keys(object).find(it => object[it] === value));

export const isUUID = (uuid: string) => new RegExp('[0-9a-fA-F]{8}\-([0-9a-fA-F]{4}\-){3}[0-9a-fA-F]{12}$').test(uuid);
