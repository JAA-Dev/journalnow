// import AdminLayout from "../../UI/AdminLayout";

// export default function Dashboard() {
//   return (
//     <AdminLayout>
//       <h2 className="text-2xl font-bold">Dashboard</h2>
//     </AdminLayout>
//   );
// }


import AdminLayout from "../../UI/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg opacity-80">Total Trades</h3>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg opacity-80">Win Rate</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">68%</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg opacity-80">Total Profit</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">+₱12,540</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg opacity-80">Total Loss</h3>
          <p className="text-3xl font-bold mt-2 text-red-400">-₱4,230</p>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg mb-6">
        <h3 className="text-xl font-bold mb-4">Recent Trades</h3>

        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg flex justify-between items-center border border-white/10">
            <div>
              <p className="font-bold">BTCUSDT</p>
              <p className="text-sm opacity-70">Long</p>
            </div>
            <p className="text-lg font-bold text-green-400">+120</p>
          </div>

          <div className="p-4 bg-white/5 rounded-lg flex justify-between items-center border border-white/10">
            <div>
              <p className="font-bold">ETHUSDT</p>
              <p className="text-sm opacity-70">Short</p>
            </div>
            <p className="text-lg font-bold text-red-400">-50</p>
          </div>

          <div className="p-4 bg-white/5 rounded-lg flex justify-between items-center border border-white/10">
            <div>
              <p className="font-bold">SOLUSDT</p>
              <p className="text-sm opacity-70">Long</p>
            </div>
            <p className="text-lg font-bold text-green-400">+300</p>
          </div>
        </div>
      </div>

      {/* Notes / Summary */}
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <p className="opacity-80 leading-relaxed">
          Your trading performance this week shows strong growth with consistent
          wins. Review your losing trades to refine your entry strategy and risk
          management.
        </p>
      </div>
    </AdminLayout>
  );
}
