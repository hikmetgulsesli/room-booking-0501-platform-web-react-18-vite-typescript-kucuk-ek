export interface Room {
  id: string;
  name: string;
  capacity: number;
  floor: string;
  status: 'available' | 'occupied' | 'maintenance';
  equipment: string[];
}

export interface Reservation {
  id: string;
  roomId: string;
  title: string;
  team: string;
  date: string;
  startTime: string;
  endTime: string;
  organizer: string;
  attendees: Attendee[];
  description: string;
  status: 'approved' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Attendee {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials?: string;
  status: 'accepted' | 'pending' | 'declined';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  department: string;
}

export type View =
  | 'dashboard'
  | 'rooms'
  | 'calendar'
  | 'analytics'
  | 'settings'
  | 'help'
  | 'add-reservation'
  | 'edit-reservation'
  | 'reservation-detail'
  | 'profile'
  | 'empty'
  | 'error';

export interface AppSettings {
  language: 'tr' | 'en';
  darkMode: boolean;
}

export interface AppState {
  view: View;
  previousView: View | null;
  rooms: Room[];
  reservations: Reservation[];
  user: User;
  settings: AppSettings;
  searchQuery: string;
  selectedReservationId: string | null;
  selectedRoomId: string | null;
  filterStatus: 'all' | 'available' | 'occupied';
  filterCapacity: number | null;
  filterTeam: string | null;
  error: string | null;
}

export const DEMO_ROOMS: Room[] = [
  {
    id: 'room-1',
    name: 'Bosphorus Toplantı Odası',
    capacity: 12,
    floor: 'Kat 4',
    status: 'occupied',
    equipment: ['Projeksiyon', 'Beyaz Tahta', 'Video Konferans'],
  },
  {
    id: 'room-2',
    name: 'Galata Odası',
    capacity: 6,
    floor: 'Kat 3',
    status: 'available',
    equipment: ['TV Ekran', 'Akıllı Tahta'],
  },
  {
    id: 'room-3',
    name: 'Kız Kulesi Odası',
    capacity: 4,
    floor: 'Kat 3',
    status: 'occupied',
    equipment: ['TV Ekran'],
  },
  {
    id: 'room-4',
    name: 'Efes Odası',
    capacity: 8,
    floor: 'Kat 2',
    status: 'maintenance',
    equipment: ['Projeksiyon', 'Ses Sistemi'],
  },
  {
    id: 'room-5',
    name: 'Kapadokya Odası',
    capacity: 10,
    floor: 'Kat 5',
    status: 'available',
    equipment: ['Video Konferans', 'Beyaz Tahta'],
  },
  {
    id: 'room-6',
    name: 'Sessiz Kabin 1',
    capacity: 2,
    floor: 'Kat 2',
    status: 'available',
    equipment: ['Telefon'],
  },
];

export const DEMO_RESERVATIONS: Reservation[] = [
  {
    id: 'res-1',
    roomId: 'room-1',
    title: 'Yönetim Kurulu Toplantısı',
    team: 'Yönetim Kurulu',
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    endTime: '11:30',
    organizer: 'Ahmet Aydın',
    attendees: [
      { id: 'a1', name: 'Ahmet Aydın', role: 'CEO', initials: 'AA', status: 'accepted' },
      { id: 'a2', name: 'Burak Korkmaz', role: 'CTO', initials: 'BK', status: 'accepted' },
    ],
    description: 'Q3 hedeflerinin gözden geçirilmesi ve stratejik planlama.',
    status: 'approved',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'res-2',
    roomId: 'room-3',
    title: '1-1 Mülakat',
    team: 'İnsan Kaynakları',
    date: new Date().toISOString().split('T')[0],
    startTime: '11:00',
    endTime: '12:00',
    organizer: 'İpek Kaya',
    attendees: [
      { id: 'a3', name: 'İpek Kaya', role: 'İK Uzmanı', initials: 'IK', status: 'accepted' },
    ],
    description: 'Yeni aday değerlendirme görüşmesi.',
    status: 'approved',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'res-3',
    roomId: 'room-1',
    title: 'Ürün Geliştirme Toplantısı',
    team: 'Yazılım Ekibi',
    date: new Date().toISOString().split('T')[0],
    startTime: '14:00',
    endTime: '15:30',
    organizer: 'Elif Yılmaz',
    attendees: [
      { id: 'a4', name: 'Elif Yılmaz', role: 'Ürün Müdürü', status: 'accepted' },
      { id: 'a5', name: 'Can Kaya', role: 'Kıdemli Tasarımcı', initials: 'CK', status: 'pending' },
    ],
    description: 'Sprint planlama ve backlog güncellemesi.',
    status: 'approved',
    createdAt: new Date(Date.now() - 90000000).toISOString(),
  },
  {
    id: 'res-4',
    roomId: 'room-2',
    title: 'Tasarım Senkronizasyonu',
    team: 'Tasarım Ekibi',
    date: new Date().toISOString().split('T')[0],
    startTime: '16:00',
    endTime: '16:45',
    organizer: 'Zeynep Demir',
    attendees: [
      { id: 'a6', name: 'Zeynep Demir', role: 'Tasarım Lideri', status: 'accepted' },
    ],
    description: 'UI/UX revizyonları ve tasarım sistem güncellemeleri.',
    status: 'approved',
    createdAt: new Date(Date.now() - 43200000).toISOString(),
  },
];

export const DEMO_USER: User = {
  id: 'user-1',
  name: 'Ahmet Yılmaz',
  email: 'ahmet.yilmaz@odarez.com',
  role: 'Sistem Yöneticisi',
  department: 'IT',
};

export function createInitialState(): AppState {
  return {
    view: 'dashboard',
    previousView: null,
    rooms: [...DEMO_ROOMS],
    reservations: [...DEMO_RESERVATIONS],
    user: { ...DEMO_USER },
    settings: { language: 'tr', darkMode: true },
    searchQuery: '',
    selectedReservationId: null,
    selectedRoomId: null,
    filterStatus: 'all',
    filterCapacity: null,
    filterTeam: null,
    error: null,
  };
}
