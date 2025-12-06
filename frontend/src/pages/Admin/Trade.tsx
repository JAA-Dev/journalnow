// import { useEffect, useState } from "react";
// import AdminLayout from "../../UI/AdminLayout";
// import type { Trade } from "../../types/Trade";
// import { deleteTrade, getTrades } from "../../services/tradeService";
// import { LucideEdit, LucideTrash2, PlusSquare } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Trade() {
//   const [trades, setTrades] = useState<Trade[]>([]);

//   // PAGINATION
//   const itemsPerPage = 7;
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     getTrades().then((res) => setTrades(res.data));
//   }, []);

//   const totalPages = Math.ceil(trades.length / itemsPerPage);

//   const paginatedTrades = trades.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const deleteSubmit = (id: number) => {
//     if (confirm("Are you sure yu want to delete this trade?")) {
//       deleteTrade(id).then(() => {
//         setTrades(trades.filter((trade) => trade.id !== id));
//       });
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="w-full flex flex-col items-center">
//         <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Trade</h2>

//         {/* ADD TRADE BUTTON – LEFT */}
//         <div className="w-full max-w-7xl mb-4">
//           <Link
//             to="/trade/create"
//             className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
//           >
//             <PlusSquare /> Add Trade
//           </Link>
//         </div>

//         {/* TABLE CONTAINER */}
//         <div className="w-full max-w-6xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-semibold mb-4">Trade Records</h3>

//           {/* DESKTOP TABLE */}
//           <div className="hidden sm:block overflow-x-auto">
//             <table className="min-w-max text-left text-sm mx-auto">
//               <thead>
//                 <tr className="border-b border-white/20 text-white/80">
//                   <th className="py-3 px-6">Symbol</th>
//                   <th className="py-3 px-6">Type</th>
//                   <th className="py-3 px-6">Position</th>
//                   <th className="py-3 px-6">Entry</th>
//                   <th className="py-3 px-6">RR</th>
//                   <th className="py-3 px-6">Reward</th>
//                   {/* <th className="py-3 px-6">Reason Entry</th>
//                   <th className="py-3 px-6">Learning</th> */}
//                   <th className="py-3 px-6">Stop Loss</th>
//                   <th className="py-3 px-6">Take Profit</th>
//                   <th className="py-3 px-6">Result</th>
//                   <th className="py-3 px-6">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {paginatedTrades.map((trade) => (
//                   <tr
//                     key={trade.id}
//                     className="border-b border-white/10 hover:bg-white/10 transition"
//                   >
//                     <td className="py-3 px-6">{trade.symbol}</td>

//                     {/* COLOR CODE FOR TYPE */}
//                     <td
//                       className={`py-3 px-6 font-semibold ${
//                         trade.tradeType === "Long"
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {trade.tradeType}
//                     </td>

//                     <td className="py-3 px-6">{trade.position}</td>
//                     <td className="py-3 px-6">{trade.entry}</td>
//                     <td className="py-3 px-6">{trade.riskReward}</td>
//                     <td
//                       className={`py-3 px-6 font-semibold ${
//                         (trade.reward ?? 0) > 0
//                           ? "text-green-400"
//                           : (trade.reward ?? 0) < 0
//                           ? "text-red-400"
//                           : "text-white"
//                       }`}
//                     >
//                       {trade.reward ?? 0}
//                     </td>

//                     {/* <td className="py-3 px-6">{trade.reasonEntry}</td>
//                     <td className="py-3 px-6">{trade.learning}</td> */}
//                     <td className="py-3 px-6">{trade.stopLoss}</td>
//                     <td className="py-3 px-6">{trade.takeProfit}</td>
//                     <td
//                       className={`py-3 px-6 font-semibold ${
//                         trade.result === "Win"
//                           ? "text-green-400"
//                           : trade.result === "Lose"
//                           ? "text-red-400"
//                           : "text-white"
//                       }`}
//                     >
//                       {trade.result}
//                     </td>

//                     <td className="py-3 px-6 flex flex-row gap-2">
//                       <Link
//                         to={`/trade/edit/${trade.id}`}
//                         className="text-blue-300 hover:underline"
//                         title="Edit"
//                       >
//                         <LucideEdit />
//                       </Link>
//                       <button
//                         onClick={() => deleteSubmit(trade.id)}
//                         className="text-red-300 hover:underline cursor-pointer"
//                         title="Delete"
//                       >
//                         <LucideTrash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* MOBILE VIEW */}
//           <div className="sm:hidden space-y-4">
//             {paginatedTrades.map((trade) => (
//               <div
//                 key={trade.id}
//                 className="p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <p className="text-lg font-semibold">{trade.symbol}</p>
//                   <span
//                     className={`text-sm font-bold px-2 py-1 rounded ${
//                       trade.tradeType === "Long"
//                         ? "bg-green-500/20 text-green-400"
//                         : "bg-red-500/20 text-red-400"
//                     }`}
//                   >
//                     {trade.tradeType}
//                   </span>
//                 </div>

//                 <p>
//                   <strong>Position:</strong> {trade.position}
//                 </p>
//                 <p>
//                   <strong>Entry:</strong> {trade.entry}
//                 </p>
//                 <p>
//                   <strong>RR:</strong> {trade.riskReward}
//                 </p>
//                 <p>
//                   <strong>Reward:</strong>{" "}
//                   <span
//                     className={`font-semibold ${
//                       (trade.reward ?? 0) > 0
//                         ? "text-green-400"
//                         : (trade.reward ?? 0) < 0
//                         ? "text-red-400"
//                         : "text-white"
//                     }`}
//                   >
//                     {trade.reward ?? 0}
//                   </span>
//                 </p>

//                 <p>
//                   <strong>Reason:</strong> {trade.reasonEntry}
//                 </p>
//                 <p>
//                   <strong>Learning:</strong> {trade.learning}
//                 </p>
//                 <p>
//                   <strong>SL:</strong> {trade.stopLoss}
//                 </p>
//                 <p>
//                   <strong>TP:</strong> {trade.takeProfit}
//                 </p>
//                 <p>
//                   <strong>Result:</strong>{" "}
//                   <span
//                     className={`font-semibold ${
//                       trade.result === "Win"
//                         ? "text-green-400"
//                         : trade.result === "Lose"
//                         ? "text-red-400"
//                         : "text-white"
//                     }`}
//                   >
//                     {trade.result}
//                   </span>
//                 </p>

//                 <div className="flex flex-row gap-2 text-right">
//                   <Link
//                   to={`/trade/edit/${trade.id}`}
//                   className="text-blue-300 hover:underline mt-2"
//                 >
//                   <LucideEdit />
//                 </Link>
//                 <button onClick={() => deleteSubmit(trade.id)} className="text-red-300 hover:underline mt-2">
//                   <LucideTrash2 />
//                 </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* PAGINATION — RIGHT SIDE */}
//           <div className="flex justify-end mt-4 text-white/80 select-none gap-2 items-center">
//             {/* PREVIOUS */}
//             <button
//               disabled={page === 1}
//               onClick={() => setPage(page - 1)}
//               className={`px-2 ${
//                 page === 1 ? "opacity-30" : "hover:text-white"
//               }`}
//             >
//               {"<"}
//             </button>

//             {/* PAGE NUMBERS (1 2 ... n) */}
//             {[...Array(totalPages)].map((_, idx) => {
//               const p = idx + 1;
//               const isCurrent = p === page;

//               // SHOW ONLY: 1, current, current±1, last
//               if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
//                 return (
//                   <button
//                     key={p}
//                     onClick={() => setPage(p)}
//                     className={`px-3 py-1 rounded ${
//                       isCurrent ? "bg-white/20 font-bold" : "hover:bg-white/10"
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 );
//               }

//               // SHOW "..." BETWEEN GAPS
//               if (p === page - 2 || p === page + 2) {
//                 return (
//                   <span key={p} className="px-2">
//                     …
//                   </span>
//                 );
//               }

//               return null;
//             })}

//             {/* NEXT */}
//             <button
//               disabled={page === totalPages}
//               onClick={() => setPage(page + 1)}
//               className={`px-2 ${
//                 page === totalPages ? "opacity-30" : "hover:text-white"
//               }`}
//             >
//               {">"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

////////////////////////////////////////////// try

// import { useEffect, useState } from "react";
// import AdminLayout from "../../UI/AdminLayout";
// import type { Trade } from "../../types/Trade";
// import { deleteTrade, getTrades } from "../../services/tradeService";
// import { LucideEdit, LucideTrash2, PlusSquare, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Trade() {
//   const [trades, setTrades] = useState<Trade[]>([]);

//   // PAGINATION
//   const itemsPerPage = 7;
//   const [page, setPage] = useState(1);

//   // ✅ DELETE MODAL STATE
//   const [showDelete, setShowDelete] = useState(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   useEffect(() => {
//     getTrades().then((res) => setTrades(res.data));
//   }, []);

//   const totalPages = Math.ceil(trades.length / itemsPerPage);

//   const paginatedTrades = trades.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   // ✅ OPEN MODAL
//   const deleteSubmit = (id: number) => {
//     setSelectedId(id);
//     setShowDelete(true);
//   };

//   // ✅ CONFIRM DELETE
//   const confirmDelete = () => {
//     if (!selectedId) return;

//     deleteTrade(selectedId).then(() => {
//       setTrades(trades.filter((trade) => trade.id !== selectedId));
//       setShowDelete(false);
//       setSelectedId(null);
//     });
//   };

//   return (
//     <AdminLayout>
//       <div className="w-full flex flex-col items-center">
//         <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Trade</h2>

//         {/* ADD TRADE BUTTON */}
//         <div className="w-full max-w-7xl mb-4">
//           <Link
//             to="/trade/create"
//             className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
//           >
//             <PlusSquare /> Add Trade
//           </Link>
//         </div>

//         {/* TABLE CONTAINER */}
//         <div className="w-full max-w-6xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
//           <h3 className="text-xl font-semibold mb-4">Trade Records</h3>

//           {/* DESKTOP TABLE */}
//           <div className="hidden sm:block overflow-x-auto">
//             <table className="min-w-max text-left text-sm mx-auto">
//               <thead>
//                 <tr className="border-b border-white/20 text-white/80">
//                   <th className="py-3 px-6">Symbol</th>
//                   <th className="py-3 px-6">Type</th>
//                   <th className="py-3 px-6">Position</th>
//                   <th className="py-3 px-6">Entry</th>
//                   <th className="py-3 px-6">RR</th>
//                   <th className="py-3 px-6">Reward</th>
//                   <th className="py-3 px-6">Stop Loss</th>
//                   <th className="py-3 px-6">Take Profit</th>
//                   <th className="py-3 px-6">Result</th>
//                   <th className="py-3 px-6">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {paginatedTrades.map((trade) => (
//                   <tr key={trade.id} className="border-b border-white/10 hover:bg-white/10 transition">
//                     <td className="py-3 px-6">{trade.symbol}</td>

//                     <td className={`py-3 px-6 font-semibold ${
//                       trade.tradeType === "Long" ? "text-green-400" : "text-red-400"
//                     }`}>
//                       {trade.tradeType}
//                     </td>

//                     <td className="py-3 px-6">{trade.position}</td>
//                     <td className="py-3 px-6">{trade.entry}</td>
//                     <td className="py-3 px-6">{trade.riskReward}</td>

//                     <td className={`py-3 px-6 font-semibold ${
//                       (trade.reward ?? 0) > 0
//                         ? "text-green-400"
//                         : (trade.reward ?? 0) < 0
//                         ? "text-red-400"
//                         : "text-white"
//                     }`}>
//                       {trade.reward}
//                     </td>

//                     <td className="py-3 px-6">{trade.stopLoss}</td>
//                     <td className="py-3 px-6">{trade.takeProfit}</td>

//                     <td className={`py-3 px-6 font-semibold ${
//                       trade.result === "Win"
//                         ? "text-green-400"
//                         : trade.result === "Lose"
//                         ? "text-red-400"
//                         : "text-white"
//                     }`}>
//                       {trade.result}
//                     </td>

//                     <td className="py-3 px-6 flex flex-row gap-2">
//                       <Link to={`/trade/edit/${trade.id}`} className="text-blue-300 hover:underline">
//                         <LucideEdit />
//                       </Link>

//                       <button
//                         onClick={() => deleteSubmit(trade.id)}
//                         className="text-red-300 hover:underline cursor-pointer"
//                       >
//                         <LucideTrash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* PAGINATION */}
//           <div className="flex justify-end mt-4 text-white/80 select-none gap-2 items-center">
//             <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`px-2 ${page === 1 ? "opacity-30" : "hover:text-white"}`}>
//               {"<"}
//             </button>

//             {[...Array(totalPages)].map((_, idx) => {
//               const p = idx + 1;
//               return (
//                 <button
//                   key={p}
//                   onClick={() => setPage(p)}
//                   className={`px-3 py-1 rounded ${p === page ? "bg-white/20 font-bold" : "hover:bg-white/10"}`}
//                 >
//                   {p}
//                 </button>
//               );
//             })}

//             <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className={`px-2 ${page === totalPages ? "opacity-30" : "hover:text-white"}`}>
//               {">"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ DELETE MODAL */}
//       {showDelete && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-lg p-6 w-full max-w-sm text-center">

//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold">Delete Trade</h3>
//               <button onClick={() => setShowDelete(false)}>
//                 <X />
//               </button>
//             </div>

//             <p className="text-white/80 mb-6">
//               Are you sure you want to delete this trade?
//             </p>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowDelete(false)}
//                 className="px-4 py-2 rounded bg-white/10 hover:bg-white/20"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import AdminLayout from "../../UI/AdminLayout";
import type { Trade } from "../../types/Trade";
import { deleteTrade, getTrades } from "../../services/tradeService";
import {
  ArrowDown,
  ArrowUp,
  LucideEdit,
  LucideTrash2,
  PlusSquare,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Trade() {
  const [trades, setTrades] = useState<Trade[]>([]);

  const itemsPerPage = 7;
  const [page, setPage] = useState(1);

  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState<"symbol" | "tradeType" | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // FIXED SMART DECIMAL FORMATTER (STRING OR NUMBER SAFE)
  const formatSmartNumber = (value?: number | string | null) => {
    if (value === null || value === undefined || value === "") return "0.00";

    const num = Number(value);

    if (isNaN(num)) return "0.00";

    // ✅ small decimals like 0.007, 0.5 → wag i-force 2 decimals
    if (Math.abs(num) < 1) {
      return num.toString();
    }

    // ✅ whole numbers + large values → always 2 decimals
    return num.toFixed(2);
  };

  useEffect(() => {
    getTrades().then((res) => setTrades(res.data));
  }, []);

  // const totalPages = Math.ceil(trades.length / itemsPerPage);

  // const paginatedTrades = trades.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );

  const deleteSubmit = (id: number) => {
    setSelectedId(id);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    if (!selectedId) return;

    deleteTrade(selectedId).then(() => {
      setTrades(trades.filter((trade) => trade.id !== selectedId));
      setShowDelete(false);
      setSelectedId(null);
    });
  };

  const filteredTrades = trades.filter(
    (trade) =>
      trade.symbol.toLowerCase().includes(search.toLowerCase()) ||
      trade.tradeType.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTrades.length / itemsPerPage);

  const sortedTrades = [...filteredTrades].sort((a, b) => {
    if (!sortBy) return 0;

    const valueA = a[sortBy].toString().toLowerCase();
    const valueB = b[sortBy].toString().toLowerCase();

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });

  const paginatedTrades = sortedTrades.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <AdminLayout>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Trade</h2>

        {/* ADD TRADE BUTTON */}
        <div className="w-full max-w-7xl mb-4">
          <Link
            to="/trade/create"
            className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
          >
            <PlusSquare /> Add Trade
          </Link>
        </div>

        {/* TABLE */}
        <div className="w-full max-w-6xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
          {/*  HEADER + SEARCH (RESPONSIVE) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-xl font-semibold">Trade Records</h3>

            <input
              type="text"
              placeholder="Search symbol or type..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 rounded bg-white/10 border border-white/20 text-sm w-full sm:w-64"
            />
          </div>

          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-max text-left text-sm mx-auto">
              <thead>
                <tr className="border-b border-white/20 text-white/80">
                  {/* <th className="py-3 px-6">Symbol</th>
                  <th className="py-3 px-6">Type</th> */}
                  <th
                    onClick={() => {
                      setSortBy("symbol");
                      setSortOrder(
                        sortBy === "symbol" && sortOrder === "asc"
                          ? "desc"
                          : "asc"
                      );
                    }}
                    className="py-3 px-6 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      Symbol
                      {sortBy === "symbol" ? (
                        sortOrder === "asc" ? (
                          <ArrowUp size={14} />
                        ) : (
                          <ArrowDown size={14} />
                        )
                      ) : (
                        <ArrowUp size={14} className="opacity-30" />
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortBy("tradeType");
                      setSortOrder(
                        sortBy === "tradeType" && sortOrder === "asc"
                          ? "desc"
                          : "asc"
                      );
                    }}
                    className="py-3 px-6 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      Type
                      {sortBy === "tradeType" ? (
                        sortOrder === "asc" ? (
                          <ArrowUp size={14} />
                        ) : (
                          <ArrowDown size={14} />
                        )
                      ) : (
                        <ArrowUp size={14} className="opacity-30" />
                      )}
                    </div>
                  </th>

                  <th className="py-3 px-6">Position</th>
                  <th className="py-3 px-6">Entry</th>
                  <th className="py-3 px-6">RR</th>
                  <th className="py-3 px-6">Reward</th>
                  <th className="py-3 px-6">Stop Loss</th>
                  <th className="py-3 px-6">Take Profit</th>
                  <th className="py-3 px-6">Result</th>
                  <th className="py-3 px-6">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedTrades.length > 0 ? (
                  paginatedTrades.map((trade) => (
                    <tr
                      key={trade.id}
                      className="border-b border-white/10 hover:bg-white/10 transition"
                    >
                      <td className="py-3 px-6">{trade.symbol}</td>

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
                      <td className="py-3 px-6">
                        {formatSmartNumber(trade.entry)}
                      </td>
                      <td className="py-3 px-6">{trade.riskReward}</td>

                      <td
                        className={`py-3 px-6 font-semibold ${
                          Number(trade.reward) > 0
                            ? "text-green-400"
                            : Number(trade.reward) < 0
                            ? "text-red-400"
                            : "text-white"
                        }`}
                      >
                        {formatSmartNumber(trade.reward)}
                      </td>

                      <td className="py-3 px-6">
                        {formatSmartNumber(trade.stopLoss)}
                      </td>
                      <td className="py-3 px-6">
                        {formatSmartNumber(trade.takeProfit)}
                      </td>

                      <td
                        className={`py-3 px-6 font-semibold ${
                          trade.result === "Win"
                            ? "text-green-400"
                            : trade.result === "Lose"
                            ? "text-red-400"
                            : "text-white"
                        }`}
                      >
                        {trade.result}
                      </td>

                      <td className="py-3 px-6 flex flex-row gap-2">
                        <Link
                          to={`/trade/edit/${trade.id}`}
                          className="text-blue-300 hover:underline"
                        >
                          <LucideEdit />
                        </Link>

                        <button
                          onClick={() => deleteSubmit(trade.id)}
                          className="text-red-300 hover:underline cursor-pointer"
                        >
                          <LucideTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={10}
                      className="text-center py-8 text-white/60 italic"
                    >
                      No trades found.
                    </td>
                  </tr>
                )}
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
                  <strong>Reward:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      (trade.reward ?? 0) > 0
                        ? "text-green-400"
                        : (trade.reward ?? 0) < 0
                        ? "text-red-400"
                        : "text-white"
                    }`}
                  >
                    {trade.reward ?? 0}
                  </span>
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
                  <strong>Result:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      trade.result === "Win"
                        ? "text-green-400"
                        : trade.result === "Lose"
                        ? "text-red-400"
                        : "text-white"
                    }`}
                  >
                    {trade.result}
                  </span>
                </p>

                <div className="flex flex-row gap-2 justify-end">
                  <Link
                    to={`/trade/edit/${trade.id}`}
                    className="text-blue-300 hover:underline mt-2"
                  >
                    <LucideEdit />
                  </Link>
                  <button
                    onClick={() => deleteSubmit(trade.id)}
                    className="text-red-300 hover:underline mt-2"
                  >
                    <LucideTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-end mt-4 text-white/80 select-none gap-2 items-center">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className={`px-2 ${
                page === 1 ? "opacity-30" : "hover:text-white"
              }`}
            >
              {"<"}
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const p = idx + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded ${
                    p === page ? "bg-white/20 font-bold" : "hover:bg-white/10"
                  }`}
                >
                  {p}
                </button>
              );
            })}

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

      {/* DELETE MODAL */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Delete Trade</h3>
              <button
                onClick={() => setShowDelete(false)}
                className="cursor-pointer"
              >
                <X />
              </button>
            </div>

            <p className="text-white/80 mb-6">
              Are you sure you want to delete this trade?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
