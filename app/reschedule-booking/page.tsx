'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.deskio.dk';

interface BookingInfo {
  booking_id: string;
  business_name: string;
  service: string;
  current_date: string;
  current_time: string;
  duration_minutes: number;
  customer_name: string;
}

type Stage = 'loading' | 'pick-date' | 'pick-time' | 'confirming' | 'done' | 'error';

const MONTH_NAMES = [
  'Januar','Februar','Marts','April','Maj','Juni',
  'Juli','August','September','Oktober','November','December',
];
const DAY_NAMES = ['Ma','Ti','On','To','Fr','Lø','Sø'];

function fmtDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${d}-${m}-${y}`;
}

function RescheduleContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const [info, setInfo]             = useState<BookingInfo | null>(null);
  const [stage, setStage]           = useState<Stage>('loading');
  const [errorMsg, setErrorMsg]     = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [slots, setSlots]               = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const today = new Date();
  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  useEffect(() => {
    if (!token) { setStage('error'); setErrorMsg('Ugyldigt link — token mangler.'); return; }
    fetch(`${API_URL}/bookings/reschedule-info?token=${token}`)
      .then(async r => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.detail ?? 'Ukendt fejl');
        return data as BookingInfo;
      })
      .then(data => { setInfo(data); setStage('pick-date'); })
      .catch(err  => { setStage('error'); setErrorMsg(err.message); });
  }, [token]);

  const selectDate = async (iso: string) => {
    setSelectedDate(iso);
    setSelectedSlot('');
    setSlotsLoading(true);
    setStage('pick-time');
    try {
      const res  = await fetch(`${API_URL}/bookings/public-availability?token=${token}&date=${iso}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail ?? 'Ukendt fejl');
      setSlots(data.available_slots ?? []);
    } catch {
      setSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  };

  const confirmReschedule = async () => {
    setStage('confirming');
    try {
      const res  = await fetch(`${API_URL}/bookings/reschedule?token=${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ new_date: selectedDate, new_time: selectedSlot }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail ?? 'Ukendt fejl');
      setStage('done');
    } catch (err: any) {
      setStage('error');
      setErrorMsg(err.message);
    }
  };

  /* ── Calendar helpers ── */
  const daysInMonth   = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const firstDayOfMonth = (y: number, m: number) => {
    const d = new Date(y, m, 1).getDay();
    return d === 0 ? 6 : d - 1; // Mon=0 … Sun=6
  };
  const prevMonth = () => calMonth === 0  ? (setCalMonth(11), setCalYear(y => y - 1)) : setCalMonth(m => m - 1);
  const nextMonth = () => calMonth === 11 ? (setCalMonth(0),  setCalYear(y => y + 1)) : setCalMonth(m => m + 1);

  const todayIso = today.toISOString().split('T')[0];

  const renderCalendar = () => {
    const days     = daysInMonth(calYear, calMonth);
    const firstDay = firstDayOfMonth(calYear, calMonth);
    const cells: React.ReactNode[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(<div key={`e${i}`} />);
    for (let d = 1; d <= days; d++) {
      const iso      = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isPast   = iso < todayIso;
      const isActive = iso === selectedDate;
      cells.push(
        <button
          key={iso}
          disabled={isPast}
          onClick={() => selectDate(iso)}
          className={[
            'aspect-square rounded-lg text-sm font-medium transition-colors',
            isPast   ? 'text-gray-300 cursor-not-allowed' : '',
            isActive ? 'bg-indigo-600 text-white'         : '',
            !isPast && !isActive ? 'hover:bg-indigo-50 text-gray-700' : '',
          ].join(' ')}
        >
          {d}
        </button>
      );
    }
    return cells;
  };

  /* ── Derived header ── */
  const icon  = stage === 'done' ? '✅' : stage === 'error' ? '❌' : '📅';
  const title = stage === 'done' ? 'Booking omlagt!' : stage === 'error' ? 'Fejl' : 'Flyt booking';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 px-8 py-8 text-center">
          <div className="text-4xl mb-3">{icon}</div>
          <h1 className="text-white text-xl font-bold">{title}</h1>
          {info && <p className="text-white/80 text-sm mt-1">{info.business_name}</p>}
        </div>

        {/* Body */}
        <div className="px-6 py-6">

          {stage === 'loading' && (
            <div className="text-center py-8 text-gray-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-3" />
              Henter bookingoplysninger…
            </div>
          )}

          {stage === 'error' && (
            <div className="text-center py-6">
              <p className="text-red-600 font-medium mb-2">Linket er ugyldigt eller udløbet</p>
              <p className="text-gray-500 text-sm">{errorMsg}</p>
            </div>
          )}

          {stage === 'done' && (
            <div className="text-center py-6">
              <p className="text-gray-700 font-semibold mb-1">Din booking er omlagt til</p>
              <p className="text-indigo-600 font-bold text-lg">
                {fmtDate(selectedDate)} kl. {selectedSlot}
              </p>
              <p className="text-gray-500 text-sm mt-3">
                Du modtager en ny bekræftelse på e-mail.
              </p>
            </div>
          )}

          {info && ['pick-date', 'pick-time', 'confirming'].includes(stage) && (
            <>
              {/* Current booking pill */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5 text-sm">
                <p className="text-indigo-700 font-semibold mb-0.5">Nuværende booking</p>
                <p className="text-indigo-600">
                  {info.service} · {fmtDate(info.current_date)} kl. {info.current_time}
                </p>
              </div>

              {/* Calendar — shown on pick-date and pick-time so user can go back */}
              {(stage === 'pick-date' || stage === 'pick-time') && (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-100 text-gray-600">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-semibold text-gray-800">
                      {MONTH_NAMES[calMonth]} {calYear}
                    </span>
                    <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-100 text-gray-600">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {DAY_NAMES.map(d => (
                      <div key={d} className="text-center text-xs text-gray-400 font-medium">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
                </div>
              )}

              {/* Time slots */}
              {stage === 'pick-time' && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Ledige tider — {fmtDate(selectedDate)}
                  </p>

                  {slotsLoading ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500 mx-auto" />
                    </div>
                  ) : slots.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-4">
                      Ingen ledige tider denne dag — vælg en anden dato
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {slots.map(s => (
                        <button
                          key={s}
                          onClick={() => setSelectedSlot(s)}
                          className={[
                            'py-2 rounded-lg text-sm font-medium border transition-colors',
                            selectedSlot === s
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600',
                          ].join(' ')}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {selectedSlot && (
                    <button
                      onClick={confirmReschedule}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      Bekræft — {fmtDate(selectedDate)} kl. {selectedSlot}
                    </button>
                  )}

                  <button
                    onClick={() => { setStage('pick-date'); setSelectedDate(''); setSelectedSlot(''); setSlots([]); }}
                    className="block w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-3"
                  >
                    ← Vælg en anden dato
                  </button>
                </div>
              )}

              {stage === 'confirming' && (
                <div className="text-center py-6 text-gray-400">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-3" />
                  Bekræfter omlægning…
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 text-center">
          <p className="text-xs text-gray-300">
            Sendt automatisk via{' '}
            <a href="https://deskio.dk" className="hover:text-gray-500">Deskio</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default function RescheduleBookingPage() {
  return (
    <Suspense>
      <RescheduleContent />
    </Suspense>
  );
}
