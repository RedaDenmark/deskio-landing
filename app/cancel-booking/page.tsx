'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.deskio.dk';

interface BookingInfo {
  business_name: string;
  service: string;
  booking_date: string;
  booking_time: string;
  duration_minutes: number;
  customer_name: string;
}

type Stage = 'loading' | 'ready' | 'cancelling' | 'done' | 'error';

function fmtDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${d}-${m}-${y}`;
}

function CancelBookingContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const [info, setInfo]       = useState<BookingInfo | null>(null);
  const [stage, setStage]     = useState<Stage>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!token) {
      setStage('error');
      setErrorMsg('Ugyldigt link — token mangler.');
      return;
    }
    fetch(`${API_URL}/bookings/cancel-info?token=${token}`)
      .then(async r => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.detail ?? 'Ukendt fejl');
        return data as BookingInfo;
      })
      .then(data => { setInfo(data); setStage('ready'); })
      .catch(err  => { setStage('error'); setErrorMsg(err.message); });
  }, [token]);

  const handleCancel = async () => {
    setStage('cancelling');
    try {
      const res  = await fetch(`${API_URL}/bookings/cancel?token=${token}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail ?? 'Ukendt fejl');
      setStage('done');
    } catch (err: any) {
      setStage('error');
      setErrorMsg(err.message);
    }
  };

  const icon  = stage === 'done' ? '✅' : stage === 'error' ? '❌' : '📅';
  const title = stage === 'done'
    ? 'Booking annulleret'
    : stage === 'error'
    ? 'Fejl'
    : 'Annullér booking';

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
        <div className="px-8 py-8">

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
              <p className="text-gray-700 font-semibold mb-2">Din booking er annulleret.</p>
              <p className="text-gray-500 text-sm">Vi håber at se dig igen snart!</p>
            </div>
          )}

          {(stage === 'ready' || stage === 'cancelling') && info && (
            <>
              <p className="text-gray-600 mb-6">
                Er du sikker på, at du vil annullere følgende booking?
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 py-1.5 w-28">Tjeneste</td>
                      <td className="text-gray-900 font-semibold">{info.service}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1.5">Dato</td>
                      <td className="text-gray-900">{fmtDate(info.booking_date)}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1.5">Tidspunkt</td>
                      <td className="text-gray-900">{info.booking_time}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1.5">Varighed</td>
                      <td className="text-gray-900">{info.duration_minutes} min</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                onClick={handleCancel}
                disabled={stage === 'cancelling'}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {stage === 'cancelling' ? 'Annullerer…' : 'Ja, annullér min booking'}
              </button>

              <a
                href="/"
                className="block text-center text-sm text-gray-400 hover:text-gray-600 mt-4"
              >
                Nej, behold min booking
              </a>
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

export default function CancelBookingPage() {
  return (
    <Suspense>
      <CancelBookingContent />
    </Suspense>
  );
}
