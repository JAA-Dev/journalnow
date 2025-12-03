// import { Link, useNavigate } from "react-router-dom";
// import AdminLayout from "../../UI/AdminLayout";
// import { LucideArrowBigLeft } from "lucide-react";
// import { useState } from "react";
// import { createTrade } from "../../services/tradeService";

// export default function TradeCreate() {
//   const [symbol, setSymbol] = useState("");
//   const [type, setType] = useState("");
//   const [position, setPosition] = useState("");
//   const [entry, setEntry] = useState<number>(0);
//   const [rr, setRR] = useState("");
//   const [takeProfit, setTakeProfit] = useState<number>(0);
//   const [stopLoss, setStopLoss] = useState<number>(0);
//   const [reason, setReason] = useState("");
//   const navigate = useNavigate();

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // alert(symbol + type + position + entry + rr + takeProfit + stopLoss + reason);
//     createTrade({
//       symbol: symbol,
//       tradeType: type,
//       position: position,
//       entry: +entry,
//       riskReward: rr,
//       takeProfit: +takeProfit,
//       stopLoss: +stopLoss,
//       reasonEntry: reason,
//     }).then(() => navigate("/trade"));
//   };

//   return (
//     <AdminLayout>
//       <div className="w-full flex flex-col items-center">
//         <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">
//           Create Trade
//         </h2>

//         {/* BACK BUTTON */}
//         <div className="w-full max-w-7xl mb-6">
//           <Link
//             to="/trade"
//             className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
//           >
//             <LucideArrowBigLeft /> Back
//           </Link>
//         </div>

//         {/* FORM CONTAINER */}
//         <form
//           onSubmit={submit}
//           className="w-full max-w-7xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 space-y-6"
//         >
//           {/* GRID FOR DESKTOP, COLUMN FOR MOBILE */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* SYMBOL */}
//             <div className="flex flex-col">
//               <label className="font-semibold">
//                 Symbol <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={symbol}
//                 onChange={(e) => setSymbol(e.target.value)}
//                 placeholder="Enter symbol (e.g., BTCUSD)"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//                 required
//               />
//             </div>

//             {/* TRADE TYPE */}
//             <div className="flex flex-col">
//               <label className="font-semibold mb-1">
//                 Trade Type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//                 className="p-2 rounded-lg bg-white/10 border border-white/20 outline-none 
//                            backdrop-blur-xl text-white"
//                 required
//               >
//                 <option className="backdrop-blur-xl bg-black/40">Long</option>
//                 <option className="backdrop-blur-xl bg-black/40">Short</option>
//               </select>
//             </div>

//             {/* POSITION */}
//             <div className="flex flex-col">
//               <label className="font-semibold">
//                 Position <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={position}
//                 onChange={(e) => setPosition(e.target.value)}
//                 placeholder="Position size"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//                 required
//               />
//             </div>

//             {/* ENTRY */}
//             <div className="flex flex-col">
//               <label className="font-semibold">
//                 Entry Price <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 value={entry}
//                 onChange={(e) => setEntry(+e.target.value)}
//                 placeholder="Entry price"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//                 required
//               />
//             </div>
//           </div>

//           {/* RISK REWARD + TP + SL IN ONE LINE */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex flex-col">
//               <label className="font-semibold">
//                 Risk Reward <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={rr}
//                 onChange={(e) => setRR(e.target.value)}
//                 placeholder="e.g., 1:2"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold">Take Profit</label>
//               <input
//                 type="number"
//                 value={takeProfit}
//                 onChange={(e) => setTakeProfit(+e.target.value)}
//                 placeholder="Optional TP"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold">Stop Loss</label>
//               <input
//                 type="number"
//                 value={stopLoss}
//                 onChange={(e) => setStopLoss(+e.target.value)}
//                 placeholder="Optional SL"
//                 className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//               />
//             </div>
//           </div>

//           {/* REASON ENTRY */}
//           <div className="flex flex-col">
//             <label className="font-semibold">
//               Reason for Entry <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               placeholder="Explain why you entered the trade"
//               className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
//               rows={3}
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               required
//             ></textarea>
//           </div>

//           {/* SUBMIT BUTTON */}
//           <div className="w-full flex justify-end">
//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-white/20 backdrop-blur-2xl border border-white/20 hover:bg-blue-700 transition cursor-pointer"
//             >
//               Save Trade
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }



import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "../../UI/AdminLayout";
import { LucideArrowBigLeft } from "lucide-react";
import { useState } from "react";
import { createTrade } from "../../services/tradeService";

export default function TradeCreate() {
  const [symbol, setSymbol] = useState("");
  const [type, setType] = useState(""); // MUST start empty because of <select>
  const [position, setPosition] = useState("");
  const [entry, setEntry] = useState<number | "">("");
  const [rr, setRR] = useState("");
  const [takeProfit, setTakeProfit] = useState<number | "">("");
  const [stopLoss, setStopLoss] = useState<number | "">("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    createTrade({
      symbol,
      tradeType: type,
      position,
      entry: Number(entry),
      riskReward: rr,
      takeProfit: takeProfit === "" ? 0 : Number(takeProfit),
      stopLoss: stopLoss === "" ? 0 : Number(stopLoss),
      reasonEntry: reason,
    })
      .then(() => navigate("/trade"))
      .catch((err) => console.log("Submit error:", err));
  };

  return (
    <AdminLayout>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Create Trade</h2>

        {/* BACK BUTTON */}
        <div className="w-full max-w-7xl mb-6">
          <Link
            to="/trade"
            className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
          >
            <LucideArrowBigLeft /> Back
          </Link>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={submit}
          className="w-full max-w-7xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 space-y-6"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SYMBOL */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Symbol <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter symbol (e.g., BTCUSD)"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                required
              />
            </div>

            {/* TRADE TYPE */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">
                Trade Type <span className="text-red-500">*</span>
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="p-2 rounded-lg bg-white/10 border border-white/20 outline-none backdrop-blur-xl text-white"
                required
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="Long" className="bg-black/40">
                  Long
                </option>
                <option value="Short" className="bg-black/40">
                  Short
                </option>
              </select>
            </div>

            {/* POSITION */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position size"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                required
              />
            </div>

            {/* ENTRY */}
            <div className="flex flex-col">
              <label className="font-semibold">
                Entry Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={entry}
                onChange={(e) => setEntry(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="Entry price"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                required
              />
            </div>
          </div>

          {/* RISK REWARD + TP + SL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold">
                Risk Reward <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={rr}
                onChange={(e) => setRR(e.target.value)}
                placeholder="e.g., 1:2"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Take Profit</label>
              <input
                type="number"
                value={takeProfit}
                onChange={(e) =>
                  setTakeProfit(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="Optional TP"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Stop Loss</label>
              <input
                type="number"
                value={stopLoss}
                onChange={(e) =>
                  setStopLoss(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="Optional SL"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>
          </div>

          {/* REASON ENTRY */}
          <div className="flex flex-col">
            <label className="font-semibold">
              Reason for Entry <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Explain why you entered the trade"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>

          {/* SUBMIT */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-white/20 backdrop-blur-2xl border border-white/20 hover:bg-blue-700 transition cursor-pointer"
            >
              Save Trade
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
