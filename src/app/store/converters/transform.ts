import StoreEntity from '../entities/store.entity';

export const transformState = <T extends StoreEntity>(state: T, stateField: string, value: any) =>
  ({ ...state, [stateField]: value });

export const generateError = <T extends StoreEntity>(state: T, error: any): T => {
  return { ...state, error, isCreating: false, isDeleting: false, isLoading: false, isUpdating: false } as T;
};
