import { TestAttempt } from "@/types/exam";

// Zero-dependency IndexedDB service to store heavy speech recordings (Blob / DataURL) and attempts
// Prevents QuotaExceededError in localStorage while ensuring voice responses and test attempts persist reliably.

const DB_NAME = "commprep_audio_store_v1";
const STORE_NAME = "recordings";
const ATTEMPTS_STORE_NAME = "attempts";
const DB_VERSION = 2;

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.indexedDB !== "undefined";
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isBrowser()) {
      reject(new Error("IndexedDB not available in current environment"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(ATTEMPTS_STORE_NAME)) {
        db.createObjectStore(ATTEMPTS_STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export interface StoredAudioRecord {
  key: string;
  dataUrl?: string;
  durationSeconds?: number;
  timestamp: number;
}

export async function saveAudioToDB(key: string, dataUrl: string, durationSeconds?: number): Promise<void> {
  if (!isBrowser() || !dataUrl) return;
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const record: StoredAudioRecord = {
        key,
        dataUrl,
        durationSeconds,
        timestamp: Date.now(),
      };
      const req = store.put(record);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Failed to save audio to IndexedDB", err);
  }
}

export async function getAudioFromDB(key: string): Promise<StoredAudioRecord | null> {
  if (!isBrowser() || !key) return null;
  try {
    const db = await openDB();
    return await new Promise<StoredAudioRecord | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Failed to get audio from IndexedDB", err);
    return null;
  }
}

export async function deleteAudioFromDB(key: string): Promise<void> {
  if (!isBrowser() || !key) return;
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Failed to delete audio from IndexedDB", err);
  }
}

// Attempt Persistence in IndexedDB (immune to 5MB browser quota limits)
export async function saveAttemptToDB(attempt: TestAttempt): Promise<void> {
  if (!isBrowser() || !attempt || !attempt.id) return;
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(ATTEMPTS_STORE_NAME, "readwrite");
      const store = tx.objectStore(ATTEMPTS_STORE_NAME);
      const req = store.put(attempt);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Failed to save attempt to IndexedDB", err);
  }
}

export async function getAttemptFromDB(id: string): Promise<TestAttempt | null> {
  if (!isBrowser() || !id) return null;
  try {
    const db = await openDB();
    return await new Promise<TestAttempt | null>((resolve, reject) => {
      const tx = db.transaction(ATTEMPTS_STORE_NAME, "readonly");
      const store = tx.objectStore(ATTEMPTS_STORE_NAME);
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Failed to get attempt from IndexedDB", err);
    return null;
  }
}
