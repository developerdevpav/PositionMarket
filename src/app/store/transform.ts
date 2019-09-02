import IStoreEntity from './IStoreEntity';

export const transformState = <T extends IStoreEntity>(state: T, stateField: string, value: any) =>
  ({ ...state, [stateField]: value });

export const generateError = <T extends IStoreEntity>(state: T, error: any): T => {
  return { ...state, error, isCreating: false, isDeleting: false, isLoading: false, isUpdating: false } as T;
};
