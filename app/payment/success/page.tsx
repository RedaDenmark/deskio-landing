export default function PaymentSuccess() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Tak for din betaling</h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Din ordre er modtaget og bliver behandlet.
        </p>
        <p className="text-sm text-gray-400 mt-6">
          Du kan lukke denne side og vende tilbage til chatten.
        </p>
      </div>
    </main>
  )
}
