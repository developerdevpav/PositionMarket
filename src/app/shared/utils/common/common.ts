
export const isNull = (object: any) => object === null;
export const nonNull = (object: any) => object !== null;

export const isEquals = (object: any, anotherObject: any) => object !== anotherObject;

export const isPresent = (object: any) => !!object;
export const isNonPresent = (object: any) => !object;
