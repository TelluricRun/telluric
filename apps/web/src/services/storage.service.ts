import * as StorageError from '@/errors/storage.error';

/**
 * Storage types supported by the storage service
 */
export type TStorageType = 'localStorage' | 'sessionStorage';

/**
 * Interface for the storage hook
 */
interface IStorageService {
	setItem: <T>(key: string, value: T, type: TStorageType) => void;
	getItem: <T>(key: string, type: TStorageType) => T | null;
	removeItem: (key: string, type: TStorageType) => void;
	clear: (type: TStorageType) => void;
	hasItem: (key: string, type: TStorageType) => boolean;
};

/**
 * Storage service for managing browser storage (localStorage or sessionStorage)
 */
export const StorageService = (): IStorageService => {
	return {
		setItem,
		getItem,
		removeItem,
		clear,
		hasItem,
	};
};

const getStorage = (type: TStorageType): Storage => {
	if (typeof window === 'undefined') {
		throw new StorageError.StorageUnavailableError('Storage is not available in this environment.');
	}

	const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;

	if (!storage) {
		throw new StorageError.StorageUnavailableError(`Storage ${ type } is not available.`);
	}

	return storage;
};

/**
 * Set an item in storage
 * @param key The storage key
 * @param value The value to store (will be JSON stringified)
 */
const setItem = <T>(key: string, value: T, type: TStorageType): void => {
	try {
		const storage = getStorage(type);
		const serializedValue = JSON.stringify(value);

		storage.setItem(key, serializedValue);
	}
	catch (error: unknown) {
		throw new StorageError.StorageWriteError(
			error instanceof Error ? error.message : 'Unknown error occurred while writing to storage.',
		);
	}
};

/**
 * Get an item from storage
 * @param key The storage key
 * @returns The parsed value or null if not found
 */
const getItem = <T>(key: string, type: TStorageType): T | null => {
	try {
		const storage = getStorage(type);
		const raw = storage.getItem(key);

		if (raw === null) return null;

		return JSON.parse(raw) as T;
	}
	catch (error: unknown) {
		throw new StorageError.StorageReadError(
			error instanceof Error ? error.message : 'Unknown error occurred while reading from storage.',
		);
	}
};

/**
 * Remove an item from storage
 * @param key The storage key
 */
const removeItem = (key: string, type: TStorageType): void => {
	try {
		const storage = getStorage(type);

		storage.removeItem(key);
	}
	catch (error: unknown) {
		throw new StorageError.StorageDeleteError(
			error instanceof Error ? error.message : 'Unknown error occurred while deleting from storage.',
		);
	}
};

/**
 * Clear all items from storage
 */
const clear = (type: TStorageType): void => {
	try {
		const storage = getStorage(type);

		storage.clear();
	}
	catch (error: unknown) {
		throw new StorageError.StorageClearError(
			error instanceof Error ? error.message : 'Unknown error occurred while clearing storage.',
		);
	}
};

/**
 * Check if a key exists in storage
 * @param key The storage key
 * @returns True if the key exists, false otherwise
 */
const hasItem = (key: string, type: TStorageType): boolean => {
	try {
		const storage = getStorage(type);

		return storage.getItem(key) !== null;
	}
	catch (error: unknown) {
		throw new StorageError.StorageHasItemError(
			error instanceof Error ? error.message : 'Unknown error occurred while checking item in storage.',
		);
	}
};
