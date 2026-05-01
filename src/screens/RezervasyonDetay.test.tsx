import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RezervasyonDetay } from '../screens/RezervasyonDetay';
import type { Room, Reservation, AppActions } from '../types/domain';

const mockRoom: Room = {
  id: 'room-1',
  name: 'Bosphorus Toplantı Odası',
  capacity: 12,
  floor: 'Kat 4',
  status: 'occupied',
  equipment: ['Projeksiyon'],
};

const mockReservation: Reservation = {
  id: 'res-1',
  roomId: 'room-1',
  title: 'Q3 Ürün Stratejisi Değerlendirmesi',
  team: 'Ürün Yönetimi',
  date: '2024-10-24',
  startTime: '14:00',
  endTime: '16:30',
  organizer: 'Ayşe Yılmaz',
  attendees: [
    { id: 'a1', name: 'Ayşe Yılmaz', role: 'Ürün Müdürü', initials: 'AY', status: 'accepted' },
    { id: 'a2', name: 'Mehmet Demir', role: 'Pazarlama Direktörü', status: 'accepted' },
    { id: 'a3', name: 'Can Kaya', role: 'Kıdemli Tasarımcı', initials: 'CK', status: 'pending' },
  ],
  description: 'Q3 hedeflerinin gözden geçirilmesi.',
  status: 'approved',
  createdAt: new Date().toISOString(),
};

const mockActions: AppActions = {
  navigate: vi.fn(),
  goBack: vi.fn(),
  setSearch: vi.fn(),
  setFilterStatus: vi.fn(),
  setFilterCapacity: vi.fn(),
  setFilterTeam: vi.fn(),
  selectReservation: vi.fn(),
  selectRoom: vi.fn(),
  addReservation: vi.fn(),
  updateReservation: vi.fn(),
  deleteReservation: vi.fn(),
  updateRoom: vi.fn(),
  updateSettings: vi.fn(),
  setError: vi.fn(),
  resetData: vi.fn(),
};

describe('RezervasyonDetay', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders reservation title and details', () => {
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    expect(screen.getByText('Q3 Ürün Stratejisi Değerlendirmesi')).toBeInTheDocument();
    expect(screen.getByText('Bosphorus Toplantı Odası')).toBeInTheDocument();
    expect(screen.getByText('Ayşe Yılmaz')).toBeInTheDocument();
  });

  it('navigates to edit on Düzenle button click', () => {
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /Düzenle/i }));
    expect(mockActions.selectReservation).toHaveBeenCalledWith('res-1');
    expect(mockActions.navigate).toHaveBeenCalledWith('edit-reservation');
  });

  it('calls deleteReservation on İptal Et button click', () => {
    vi.stubGlobal('confirm', () => true);
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /İptal Et/i }));
    expect(mockActions.deleteReservation).toHaveBeenCalledWith('res-1');
    vi.unstubAllGlobals();
  });

  it('does not delete if confirm is cancelled', () => {
    vi.stubGlobal('confirm', () => false);
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /İptal Et/i }));
    expect(mockActions.deleteReservation).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });

  it('navigates to dashboard on Panel link click', () => {
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    fireEvent.click(screen.getByText('Panel'));
    expect(mockActions.navigate).toHaveBeenCalledWith('dashboard');
  });

  it('renders all attendees', () => {
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    expect(screen.getByText('Ayşe Yılmaz')).toBeInTheDocument();
    expect(screen.getByText('Mehmet Demir')).toBeInTheDocument();
    expect(screen.getByText('Can Kaya')).toBeInTheDocument();
  });

  it('shows organizer badge on correct attendee', () => {
    render(
      <RezervasyonDetay
        reservation={mockReservation}
        room={mockRoom}
        actions={mockActions}
        searchQuery=""
      />
    );

    expect(screen.getByText('Organizatör')).toBeInTheDocument();
  });
});
