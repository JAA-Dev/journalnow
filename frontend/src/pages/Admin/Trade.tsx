import { useEffect, useState } from "react";
import AdminLayout from "../../UI/AdminLayout";
import type { Trade } from "../../types/Trade";
import { getTrades } from "../../services/tradeService";
import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Trade() {
  const [trades, setTrades] = useState<Trade[]>([]);

  // PAGINATION
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrades().then((res) => setTrades(res.data));
  }, []);

  const totalPages = Math.ceil(trades.length / itemsPerPage);

  const paginatedTrades = trades.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <AdminLayout>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Trade</h2>

        {/* ADD TRADE BUTTON – LEFT */}
        <div className="w-full max-w-7xl mb-4">
          <Link
            to="/trade/create"
            className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
          >
            <PlusSquare /> Add Trade
          </Link>
        </div>

        {/* TABLE CONTAINER */}
        <div className="w-full max-w-7xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Trade Records</h3>

          {/* DESKTOP TABLE */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-max text-left text-sm mx-auto">
              <thead>
                <tr className="border-b border-white/20 text-white/80">
                  <th className="py-3 px-6">Symbol</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">Position</th>
                  <th className="py-3 px-6">Entry</th>
                  <th className="py-3 px-6">RR</th>
                  <th className="py-3 px-6">Reward</th>
                  <th className="py-3 px-6">Reason Entry</th>
                  <th className="py-3 px-6">Learning</th>
                  <th className="py-3 px-6">Stop Loss</th>
                  <th className="py-3 px-6">Take Profit</th>
                  <th className="py-3 px-6">Result</th>
                  <th className="py-3 px-6">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedTrades.map((trade) => (
                  <tr
                    key={trade.id}
                    className="border-b border-white/10 hover:bg-white/10 transition"
                  >
                    <td className="py-3 px-6">{trade.symbol}</td>

                    {/* COLOR CODE FOR TYPE */}
                    <td
                      className={`py-3 px-6 font-semibold ${
                        trade.tradeType === "Long"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {trade.tradeType}
                    </td>

                    <td className="py-3 px-6">{trade.position}</td>
                    <td className="py-3 px-6">{trade.entry}</td>
                    <td className="py-3 px-6">{trade.riskReward}</td>
                    <td className="py-3 px-6">{trade.reward}</td>
                    <td className="py-3 px-6">{trade.reasonEntry}</td>
                    <td className="py-3 px-6">{trade.learning}</td>
                    <td className="py-3 px-6">{trade.stopLoss}</td>
                    <td className="py-3 px-6">{trade.takeProfit}</td>
                    <td className="py-3 px-6">{trade.result}</td>

                    <td className="py-3 px-6">
                      <Link
                        to="/trade/edit"
                        className="text-blue-300 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="sm:hidden space-y-4">
            {paginatedTrades.map((trade) => (
              <div
                key={trade.id}
                className="p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-semibold">{trade.symbol}</p>
                  <span
                    className={`text-sm font-bold px-2 py-1 rounded ${
                      trade.tradeType === "Long"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {trade.tradeType}
                  </span>
                </div>

                <p>
                  <strong>Position:</strong> {trade.position}
                </p>
                <p>
                  <strong>Entry:</strong> {trade.entry}
                </p>
                <p>
                  <strong>RR:</strong> {trade.riskReward}
                </p>
                <p>
                  <strong>Reward:</strong> {trade.reward}
                </p>
                <p>
                  <strong>Reason:</strong> {trade.reasonEntry}
                </p>
                <p>
                  <strong>Learning:</strong> {trade.learning}
                </p>
                <p>
                  <strong>SL:</strong> {trade.stopLoss}
                </p>
                <p>
                  <strong>TP:</strong> {trade.takeProfit}
                </p>
                <p>
                  <strong>Result:</strong> {trade.result}
                </p>

                <Link
                  to="/trade/edit"
                  className="text-blue-300 hover:underline mt-2"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>

          {/* PAGINATION — RIGHT SIDE */}
          <div className="flex justify-end mt-4 text-white/80 select-none gap-2 items-center">
            {/* PREVIOUS */}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className={`px-2 ${
                page === 1 ? "opacity-30" : "hover:text-white"
              }`}
            >
              {"<"}
            </button>

            {/* PAGE NUMBERS (1 2 ... n) */}
            {[...Array(totalPages)].map((_, idx) => {
              const p = idx + 1;
              const isCurrent = p === page;

              // SHOW ONLY: 1, current, current±1, last
              if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded ${
                      isCurrent ? "bg-white/20 font-bold" : "hover:bg-white/10"
                    }`}
                  >
                    {p}
                  </button>
                );
              }

              // SHOW "..." BETWEEN GAPS
              if (p === page - 2 || p === page + 2) {
                return (
                  <span key={p} className="px-2">
                    …
                  </span>
                );
              }

              return null;
            })}

            {/* NEXT */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className={`px-2 ${
                page === totalPages ? "opacity-30" : "hover:text-white"
              }`}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
