import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RezervasyonEkleduzenle } from '../screens/RezervasyonEkleduzenle';
import type { Room, Reservation, AppActions } from '../types/domain';

const mockRooms: Room[] = [
  { id: 'room-1', name: 'Bosphorus Toplantı Odası', capacity: 12, floor: 'Kat 4', status: 'available', equipment: [] },
  { id: 'room-2', name: 'Galata Odası', capacity: 6, floor: 'Kat 3', status: 'available', equipment: [] },
];

const mockReservations: Reservation[] = [
  {
    id: 'res-1',
    roomId: 'room-1',
    title: 'Mevcut Toplantı',
    team: 'Yazılım Ekibi',
    date: '2024-12-15',
    startTime: '10:00',
    endTime: '11:00',
    organizer: 'Elif Yılmaz',
    attendees: [],
    description: 'Mevcut toplantı',
    status: 'approved',
    createdAt: new Date().toISOString(),
  },
];

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

describe('RezervasyonEkleduzenle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders add mode with correct title', () => {
    render(
      <RezervasyonEkleduzenle
        mode="add"
        reservation={null}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );
    expect(screen.getByText('Rezervasyon Oluştur')).toBeInTheDocument();
  });

  it('renders edit mode with correct title', () => {
    render(
      <RezervasyonEkleduzenle
        mode="edit"
        reservation={mockReservations[0]}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );
    expect(screen.getByText('Rezervasyon Düzenle')).toBeInTheDocument();
  });

  it('fills form and adds a reservation', async () => {
    render(
      <RezervasyonEkleduzenle
        mode="add"
        reservation={null}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );

    fireEvent.change(screen.getByLabelText(/Oda Seçimi/i), { target: { value: 'room-2' } });
    fireEvent.change(screen.getByLabelText(/Tarih/i), { target: { value: '2024-12-20' } });
    fireEvent.change(screen.getByLabelText(/Başlangıç Saati/i), { target: { value: '14:00' } });
    fireEvent.change(screen.getByLabelText(/Bitiş Saati/i), { target: { value: '15:30' } });
    fireEvent.change(screen.getByLabelText(/Toplantı Adı/i), { target: { value: 'Yeni Toplantı' } });

    const saveButton = screen.getByRole('button', { name: /Kaydet/i });
    expect(saveButton).not.toBeDisabled();

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockActions.addReservation).toHaveBeenCalled();
    });

    const calledWith = (mockActions.addReservation as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(calledWith.title).toBe('Yeni Toplantı');
    expect(calledWith.roomId).toBe('room-2');
    expect(calledWith.date).toBe('2024-12-20');
    expect(calledWith.startTime).toBe('14:00');
    expect(calledWith.endTime).toBe('15:30');
  });

  it('shows conflict warning when time overlaps', () => {
    render(
      <RezervasyonEkleduzenle
        mode="add"
        reservation={null}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );

    fireEvent.change(screen.getByLabelText(/Oda Seçimi/i), { target: { value: 'room-1' } });
    fireEvent.change(screen.getByLabelText(/Tarih/i), { target: { value: '2024-12-15' } });
    fireEvent.change(screen.getByLabelText(/Başlangıç Saati/i), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText(/Bitiş Saati/i), { target: { value: '11:00' } });
    fireEvent.change(screen.getByLabelText(/Toplantı Adı/i), { target: { value: 'Çakışan Toplantı' } });

    expect(screen.getByText(/Saat Çakışması Tespit Edildi/i)).toBeInTheDocument();
  });

  it('cancels and goes back', () => {
    render(
      <RezervasyonEkleduzenle
        mode="add"
        reservation={null}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /İptal/i }));
    expect(mockActions.goBack).toHaveBeenCalled();
  });

  it('disables save when required fields are empty', () => {
    render(
      <RezervasyonEkleduzenle
        mode="add"
        reservation={null}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );

    const saveButton = screen.getByRole('button', { name: /Kaydet/i });
    expect(saveButton).toBeDisabled();
  });

  it('pre-fills edit form with reservation data', () => {
    render(
      <RezervasyonEkleduzenle
        mode="edit"
        reservation={mockReservations[0]}
        rooms={mockRooms}
        reservations={mockReservations}
        actions={mockActions}
      />
    );

    expect((screen.getByLabelText(/Toplantı Adı/i) as HTMLInputElement).value).toBe('Mevcut Toplantı');
  });
});
