import { StorageService, TStorageType } from '@/services/storage.service';

interface IStorageHook {
	setItem: <T>(key: string, value: T) => void;
	getItem: <T>(key: string) => T | null;
	removeItem: (key: string) => void;
	clear: () => void;
	hasItem: (key: string) => boolean;
};

/**
 * React hook for using browser storage (localStorage or sessionStorage)
 * @param type The type of storage to use (default: 'localStorage')
 * @returns An object with storage methods
 */
export const useStorage = (type: TStorageType = 'localStorage'): IStorageHook => {
	const { setItem, getItem, removeItem, clear, hasItem } = StorageService();

	return {
		setItem: <T>(key: string, value: T): void => setItem<T>(key, value, type),
		getItem: <T>(key: string): T | null => getItem<T>(key, type),
		removeItem: (key: string): void => removeItem(key, type),
		clear: (): void => clear(type),
		hasItem: (key: string): boolean => hasItem(key, type),
	};
};
