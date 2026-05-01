import { describe, it, expect } from 'vitest';
import { createInitialState, DEMO_ROOMS, DEMO_RESERVATIONS, DEMO_USER } from '../types/domain';

describe('domain types', () => {
  it('createInitialState returns valid default state', () => {
    const state = createInitialState();
    expect(state.view).toBe('dashboard');
    expect(state.rooms.length).toBeGreaterThan(0);
    expect(state.reservations.length).toBeGreaterThan(0);
    expect(state.user.name).toBe('Ahmet Yılmaz');
    expect(state.settings.language).toBe('tr');
    expect(state.settings.darkMode).toBe(true);
  });

  it('DEMO_ROOMS have required fields', () => {
    DEMO_ROOMS.forEach((room) => {
      expect(room.id).toBeTruthy();
      expect(room.name).toBeTruthy();
      expect(room.capacity).toBeGreaterThan(0);
    });
  });

  it('DEMO_RESERVATIONS have required fields', () => {
    DEMO_RESERVATIONS.forEach((res) => {
      expect(res.id).toBeTruthy();
      expect(res.roomId).toBeTruthy();
      expect(res.title).toBeTruthy();
      expect(res.date).toBeTruthy();
      expect(res.startTime).toBeTruthy();
      expect(res.endTime).toBeTruthy();
    });
  });
});
