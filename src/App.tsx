import { useAppState } from './hooks/useAppState';
import { AnaEkranDashboard } from './screens/AnaEkranDashboard';
import { BosDurum } from './screens/BosDurum';
import { HataDurumu } from './screens/HataDurumu';
import { Ayarlar } from './screens/Ayarlar';
import { Istatistikler } from './screens/Istatistikler';
import { RezervasyonDetay } from './screens/RezervasyonDetay';
import { RezervasyonEkleduzenle } from './screens/RezervasyonEkleduzenle';
import { ProfilPaneli } from './screens/ProfilPaneli';
import type { View } from './types/domain';

export default function App() {
  const { state, actions } = useAppState();

  const handleNavigate = (view: View) => actions.navigate(view);

  return (
    <div data-setfarm-root="app-shell" className="min-h-screen bg-[#11131b] text-[#e1e2ed]">
      {state.view === 'dashboard' && (
        <AnaEkranDashboard
          rooms={state.rooms}
          reservations={state.reservations}
          searchQuery={state.searchQuery}
          filterStatus={state.filterStatus}
          filterCapacity={state.filterCapacity}
          filterTeam={state.filterTeam}
          actions={actions}
        />
      )}
      {state.view === 'empty' && (
        <BosDurum
          actions={actions}
          searchQuery={state.searchQuery}
        />
      )}
      {state.view === 'error' && (
        <HataDurumu
          error={state.error}
          onRetry={() => actions.navigate('dashboard')}
          onHelp={() => actions.navigate('help')}
        />
      )}
      {state.view === 'settings' && (
        <Ayarlar
          settings={state.settings}
          actions={actions}
          searchQuery={state.searchQuery}
        />
      )}
      {state.view === 'analytics' && (
        <Istatistikler
          rooms={state.rooms}
          reservations={state.reservations}
          searchQuery={state.searchQuery}
          actions={actions}
        />
      )}
      {state.view === 'reservation-detail' && state.selectedReservationId && (
        <RezervasyonDetay
          reservation={state.reservations.find(r => r.id === state.selectedReservationId)!}
          room={state.rooms.find(r => r.id === state.reservations.find(res => res.id === state.selectedReservationId)?.roomId)!}
          actions={actions}
          searchQuery={state.searchQuery}
        />
      )}
      {(state.view === 'add-reservation' || state.view === 'edit-reservation') && (
        <RezervasyonEkleduzenle
          mode={state.view === 'edit-reservation' ? 'edit' : 'add'}
          reservation={state.view === 'edit-reservation' ? state.reservations.find(r => r.id === state.selectedReservationId) ?? null : null}
          rooms={state.rooms}
          reservations={state.reservations}
          actions={actions}
        />
      )}
      {state.view === 'profile' && (
        <ProfilPaneli
          user={state.user}
          onClose={() => actions.goBack()}
          actions={actions}
        />
      )}
      {/* Fallback for unmapped views: show dashboard */}
      {['rooms', 'calendar', 'help'].includes(state.view) && (
        <AnaEkranDashboard
          rooms={state.rooms}
          reservations={state.reservations}
          searchQuery={state.searchQuery}
          filterStatus={state.filterStatus}
          filterCapacity={state.filterCapacity}
          filterTeam={state.filterTeam}
          actions={actions}
        />
      )}
    </div>
  );
}
