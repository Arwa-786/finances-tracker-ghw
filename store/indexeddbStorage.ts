
import Dexie from "dexie";

type AppStateItem = {
  value: string | PromiseLike<string | null> | null;
  id: string;
  key: string;
};

const db = new Dexie("FinanceTrackerDB");

db.version(1).stores({
  appState: "key",
});

const appStateTable = db.table<AppStateItem, string>("appState");

export const indexeddbStorage = {
  getItem: async (key: string): Promise<string | null> => {
    try {
      const item = await appStateTable.get(key);
      return item ? item.value : null;
    } catch (error) {
      console.error("IndexedDB getItem error:", error);
      return null;
    }
  },

  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await appStateTable.put({ key, value });
    } catch (error) {
      console.error("IndexedDB setItem error:", error);
      throw error;
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      await appStateTable.delete(key);
    } catch (error) {
      console.error("IndexedDB removeItem error:", error);
      throw error;
    }
  },
};
