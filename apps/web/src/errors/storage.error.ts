const STORAGE_UNAVAILABLE_ERROR = 'StorageUnavailableError';
const STORAGE_WRITE_ERROR = 'StorageWriteError';
const STORAGE_READ_ERROR = 'StorageReadError';
const STORAGE_DELETE_ERROR = 'StorageDeleteError';
const STORAGE_CLEAR_ERROR = 'StorageClearError';
const STORAGE_HAS_ITEM_ERROR = 'StorageHasItemError';

export class StorageUnavailableError extends Error {
	constructor(message = 'Storage is not available.') {
		super(message);
		this.name = STORAGE_UNAVAILABLE_ERROR;
	}
};

export class StorageWriteError extends Error {
	constructor(message = 'Failed to write item to storage.') {
		super(message);
		this.name = STORAGE_WRITE_ERROR;
	}
};

export class StorageReadError extends Error {
	constructor(message = 'Failed to read item from storage.') {
		super(message);
		this.name = STORAGE_READ_ERROR;
	}
};

export class StorageDeleteError extends Error {
	constructor(message = 'Failed to delete item from storage.') {
		super(message);
		this.name = STORAGE_DELETE_ERROR;
	}
};

export class StorageClearError extends Error {
	constructor(message = 'Failed to clear storage.') {
		super(message);
		this.name = STORAGE_CLEAR_ERROR;
	}
};

export class StorageHasItemError extends Error {
	constructor(message = 'Failed to check if item exists in storage.') {
		super(message);
		this.name = STORAGE_HAS_ITEM_ERROR;
	}
};
