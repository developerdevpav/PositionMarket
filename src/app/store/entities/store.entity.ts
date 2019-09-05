interface StoreEntity {
  isLoading?: boolean;
  isDeleting?: boolean;
  isUpdating?: boolean;
  isCreating?: boolean;
  error?: any;
}

export default StoreEntity;
