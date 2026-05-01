import type { AppState } from '../types/domain';

const STORAGE_KEY = 'odarez-app-state';

export function loadState(): Partial<AppState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return parsed;
  } catch {
    return null;
  }
}

export function saveState(state: AppState): void {
  try {
    const persisted: Partial<AppState> = {
      rooms: state.rooms,
      reservations: state.reservations,
      settings: state.settings,
      user: state.user,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  } catch {
    // Silent fail for storage quota or private mode
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Silent fail
  }
}

export function exportData(state: AppState): string {
  const payload = {
    rooms: state.rooms,
    reservations: state.reservations,
    settings: state.settings,
    user: state.user,
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(payload, null, 2);
}
