type KeyDataType = 'frontend-challenge';

class LocalStorage {
  saveData<T>(key: KeyDataType, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  }

  getData<T>(key: KeyDataType): T | null {
    try {
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : null;
    } catch (error) {
      throw error;
    }
  }
}

export const localStorageUtil = new LocalStorage();
