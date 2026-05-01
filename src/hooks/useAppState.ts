import { useReducer, useEffect, useCallback } from 'react';
import type { AppState, View, Room, Reservation, AppSettings } from '../types/domain';
import { createInitialState } from '../types/domain';
import { loadState, saveState } from '../utils/storage';

type Action =
  | { type: 'NAVIGATE'; view: View }
  | { type: 'GO_BACK' }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'SET_FILTER_STATUS'; status: AppState['filterStatus'] }
  | { type: 'SET_FILTER_CAPACITY'; capacity: number | null }
  | { type: 'SET_FILTER_TEAM'; team: string | null }
  | { type: 'SELECT_RESERVATION'; id: string | null }
  | { type: 'SELECT_ROOM'; id: string | null }
  | { type: 'ADD_RESERVATION'; reservation: Reservation }
  | { type: 'UPDATE_RESERVATION'; reservation: Reservation }
  | { type: 'DELETE_RESERVATION'; id: string }
  | { type: 'UPDATE_ROOM'; room: Room }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<AppSettings> }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'RESET_DATA' }
  | { type: 'LOAD_STATE'; state: Partial<AppState> };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        previousView: state.view,
        view: action.view,
        error: null,
      };
    case 'GO_BACK':
      return {
        ...state,
        view: state.previousView ?? 'dashboard',
        previousView: null,
        error: null,
      };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query };
    case 'SET_FILTER_STATUS':
      return { ...state, filterStatus: action.status };
    case 'SET_FILTER_CAPACITY':
      return { ...state, filterCapacity: action.capacity };
    case 'SET_FILTER_TEAM':
      return { ...state, filterTeam: action.team };
    case 'SELECT_RESERVATION':
      return {
        ...state,
        selectedReservationId: action.id,
        view: action.id ? 'reservation-detail' : state.view,
      };
    case 'SELECT_ROOM':
      return { ...state, selectedRoomId: action.id };
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.reservation],
        view: 'dashboard',
      };
    case 'UPDATE_RESERVATION': {
      const list = state.reservations.map((r) =>
        r.id === action.reservation.id ? action.reservation : r
      );
      return { ...state, reservations: list, view: 'dashboard' };
    }
    case 'DELETE_RESERVATION': {
      const list = state.reservations.filter((r) => r.id !== action.id);
      return { ...state, reservations: list, view: 'dashboard' };
    }
    case 'UPDATE_ROOM': {
      const list = state.rooms.map((r) =>
        r.id === action.room.id ? action.room : r
      );
      return { ...state, rooms: list };
    }
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.settings },
      };
    case 'SET_ERROR':
      return { ...state, error: action.error, view: action.error ? 'error' : state.view };
    case 'RESET_DATA': {
      const fresh = createInitialState();
      return { ...fresh, view: 'dashboard' };
    }
    case 'LOAD_STATE': {
      const fresh = createInitialState();
      return {
        ...fresh,
        ...action.state,
        view: action.state.view ?? fresh.view,
      };
    }
    default:
      return state;
  }
}

export interface AppActions {
  navigate: (view: View) => void;
  goBack: () => void;
  setSearch: (query: string) => void;
  setFilterStatus: (status: AppState['filterStatus']) => void;
  setFilterCapacity: (capacity: number | null) => void;
  setFilterTeam: (team: string | null) => void;
  selectReservation: (id: string | null) => void;
  selectRoom: (id: string | null) => void;
  addReservation: (reservation: Reservation) => void;
  updateReservation: (reservation: Reservation) => void;
  deleteReservation: (id: string) => void;
  updateRoom: (room: Room) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  setError: (error: string | null) => void;
  resetData: () => void;
}

export function useAppState(): { state: AppState; actions: AppActions } {
  const [state, dispatch] = useReducer(reducer, undefined, () => {
    const saved = loadState();
    if (saved) {
      return { ...createInitialState(), ...saved };
    }
    return createInitialState();
  });

  useEffect(() => {
    saveState(state);
  }, [state.rooms, state.reservations, state.settings, state.user]);

  const navigate = useCallback((view: View) => dispatch({ type: 'NAVIGATE', view }), []);
  const goBack = useCallback(() => dispatch({ type: 'GO_BACK' }), []);
  const setSearch = useCallback((query: string) => dispatch({ type: 'SET_SEARCH', query }), []);
  const setFilterStatus = useCallback(
    (status: AppState['filterStatus']) => dispatch({ type: 'SET_FILTER_STATUS', status }),
    []
  );
  const setFilterCapacity = useCallback(
    (capacity: number | null) => dispatch({ type: 'SET_FILTER_CAPACITY', capacity }),
    []
  );
  const setFilterTeam = useCallback(
    (team: string | null) => dispatch({ type: 'SET_FILTER_TEAM', team }),
    []
  );
  const selectReservation = useCallback(
    (id: string | null) => dispatch({ type: 'SELECT_RESERVATION', id }),
    []
  );
  const selectRoom = useCallback((id: string | null) => dispatch({ type: 'SELECT_ROOM', id }), []);
  const addReservation = useCallback(
    (reservation: Reservation) => dispatch({ type: 'ADD_RESERVATION', reservation }),
    []
  );
  const updateReservation = useCallback(
    (reservation: Reservation) => dispatch({ type: 'UPDATE_RESERVATION', reservation }),
    []
  );
  const deleteReservation = useCallback(
    (id: string) => dispatch({ type: 'DELETE_RESERVATION', id }),
    []
  );
  const updateRoom = useCallback(
    (room: Room) => dispatch({ type: 'UPDATE_ROOM', room }),
    []
  );
  const updateSettings = useCallback(
    (settings: Partial<AppSettings>) => dispatch({ type: 'UPDATE_SETTINGS', settings }),
    []
  );
  const setError = useCallback(
    (error: string | null) => dispatch({ type: 'SET_ERROR', error }),
    []
  );
  const resetData = useCallback(() => dispatch({ type: 'RESET_DATA' }), []);

  const actions: AppActions = {
    navigate,
    goBack,
    setSearch,
    setFilterStatus,
    setFilterCapacity,
    setFilterTeam,
    selectReservation,
    selectRoom,
    addReservation,
    updateReservation,
    deleteReservation,
    updateRoom,
    updateSettings,
    setError,
    resetData,
  };

  return { state, actions };
}
