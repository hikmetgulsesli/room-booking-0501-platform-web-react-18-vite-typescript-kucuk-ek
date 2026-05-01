import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, clearStorage, exportData } from '../utils/storage';
import { createInitialState } from '../types/domain';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads null when no state is stored', () => {
    expect(loadState()).toBeNull();
  });

  it('saves and loads state', () => {
    const state = createInitialState();
    saveState(state);
    const loaded = loadState();
    expect(loaded).not.toBeNull();
    expect(loaded?.rooms).toHaveLength(state.rooms.length);
    expect(loaded?.reservations).toHaveLength(state.reservations.length);
  });

  it('clears storage', () => {
    saveState(createInitialState());
    clearStorage();
    expect(loadState()).toBeNull();
  });

  it('exportData returns JSON string', () => {
    const state = createInitialState();
    const json = exportData(state);
    const parsed = JSON.parse(json);
    expect(parsed.rooms).toBeDefined();
    expect(parsed.reservations).toBeDefined();
    expect(parsed.exportedAt).toBeDefined();
  });
});
