import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from '../hooks/useAppState';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with dashboard view and demo data', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.view).toBe('dashboard');
    expect(result.current.state.rooms.length).toBeGreaterThan(0);
    expect(result.current.state.reservations.length).toBeGreaterThan(0);
  });

  it('navigates between views', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.navigate('settings');
    });
    expect(result.current.state.view).toBe('settings');
  });

  it('adds a reservation', () => {
    const { result } = renderHook(() => useAppState());
    const before = result.current.state.reservations.length;
    act(() => {
      result.current.actions.addReservation({
        id: 'res-test',
        roomId: 'room-1',
        title: 'Test Toplantı',
        team: 'Test Ekibi',
        date: '2024-12-01',
        startTime: '10:00',
        endTime: '11:00',
        organizer: 'Elif Yılmaz',
        attendees: [],
        description: 'Test',
        status: 'approved',
        createdAt: new Date().toISOString(),
      });
    });
    expect(result.current.state.reservations.length).toBe(before + 1);
  });

  it('deletes a reservation', () => {
    const { result } = renderHook(() => useAppState());
    const before = result.current.state.reservations.length;
    const id = result.current.state.reservations[0].id;
    act(() => {
      result.current.actions.deleteReservation(id);
    });
    expect(result.current.state.reservations.length).toBe(before - 1);
  });

  it('updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.updateSettings({ language: 'en' });
    });
    expect(result.current.state.settings.language).toBe('en');
  });

  it('sets search query', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.setSearch('Bosphorus');
    });
    expect(result.current.state.searchQuery).toBe('Bosphorus');
  });

  it('selects a reservation', () => {
    const { result } = renderHook(() => useAppState());
    const id = result.current.state.reservations[0].id;
    act(() => {
      result.current.actions.selectReservation(id);
    });
    expect(result.current.state.selectedReservationId).toBe(id);
    expect(result.current.state.view).toBe('reservation-detail');
  });

  it('resets data to defaults', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.setSearch('test');
      result.current.actions.resetData();
    });
    expect(result.current.state.searchQuery).toBe('');
    expect(result.current.state.view).toBe('dashboard');
  });
});
