import { Link, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../UI/AdminLayout";
import { LucideArrowBigLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getTrade, updateTrade } from "../../services/tradeService";
import { toast } from "react-toastify";

export default function TradeEdit() {
  const { id } = useParams();

  const [symbol, setSymbol] = useState("");
  const [type, setType] = useState("");
  const [position, setPosition] = useState("");

  // ✅ ALL DECIMALS AS STRING (FIXED)
  const [entry, setEntry] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [reward, setReward] = useState("");

  const [rr, setRR] = useState("");
  const [reason, setReason] = useState("");
  const [learning, setLearning] = useState("");
  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTrade(id).then((res) => {
        setSymbol(res.data.symbol);
        setType(res.data.tradeType);
        // setPosition(res.data.position);
        setPosition(res.data.position?.toString() || "");

        // Convert numbers to string safely
        setEntry(res.data.entry?.toString() || "");
        setRR(res.data.riskReward);
        setReason(res.data.reasonEntry || "");
        setStopLoss(res.data.stopLoss?.toString() || "");
        setTakeProfit(res.data.takeProfit?.toString() || "");
        setReward(res.data.reward?.toString() || "");
        setLearning(res.data.learning || "");
        setResult(res.data.result || "");
      });
    }
  }, [id]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    updateTrade(id, {
      symbol,
      tradeType: type,
      // position,
      position: position ? Number(position) : null,
      entry: Number(entry),
      riskReward: rr,

      // ✅ SAFE DECIMAL CONVERSION
      takeProfit: takeProfit ? Number(takeProfit) : null,
      stopLoss: stopLoss ? Number(stopLoss) : null,
      reward: reward ? Number(reward) : null,

      result,
      reasonEntry: reason,
      learning,
    })
      .then(() => {
        toast.success("Trade update successfully!");
        navigate("/trade");
      })
      .catch((err) => {
        console.log("Submit error:", err);
        toast.error("Failed to update trade!");
      })
      .finally(() => setLoading(false));
    // .then(() => navigate("/trade"));
  };

  return (
    <AdminLayout>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">
          Edit Trade
        </h2>

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
          className="w-full max-w-6xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 space-y-6"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SYMBOL */}
            <div className="flex flex-col">
              <label className="font-semibold">Symbol</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter symbol (e.g., BTCUSD)"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            {/* TRADE TYPE */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Trade Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="p-2 rounded-lg bg-white/10 border border-white/20 outline-none backdrop-blur-xl text-white"
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
              <label className="font-semibold">Position</label>
              <input
                type="number"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position size"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            {/* ENTRY */}
            <div className="flex flex-col">
              <label className="font-semibold">Entry Price</label>
              <input
                type="number"
                step="0.00000001"
                inputMode="decimal"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Entry price"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Risk Reward</label>
              <input
                type="text"
                value={rr}
                onChange={(e) => setRR(e.target.value)}
                placeholder="e.g., 1:2"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            {/* TAKE PROFIT */}
            <div className="flex flex-col">
              <label className="font-semibold">Take Profit</label>
              <input
                type="number"
                step="0.00000001"
                inputMode="decimal"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
                placeholder="Optional TP"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* STOP LOSS */}
            <div className="flex flex-col">
              <label className="font-semibold">Stop Loss</label>
              <input
                type="number"
                step="0.00000001"
                inputMode="decimal"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                placeholder="Optional SL"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            {/* REWARD */}
            <div className="flex flex-col">
              <label className="font-semibold">Reward</label>
              <input
                type="number"
                step="0.00000001"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                placeholder="e.g., +10 USDT"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              />
            </div>

            {/* RESULT */}
            <div className="flex flex-col">
              <label className="font-semibold">Result</label>
              <select
                value={result}
                onChange={(e) => setResult(e.target.value)}
                className="p-2 rounded-lg bg-white/10 border border-white/20 outline-none backdrop-blur-xl text-white"
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="Win" className="bg-black/40">
                  Win
                </option>
                <option value="Lose" className="bg-black/40">
                  Lose
                </option>
              </select>
            </div>
          </div>

          {/* REASON ENTRY */}
          <div className="flex flex-col">
            <label className="font-semibold">Reason for Entry</label>
            <textarea
              placeholder="Explain why you entered the trade"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>

          {/* LEARNING */}
          <div className="flex flex-col">
            <label className="font-semibold">Learning</label>
            <textarea
              placeholder="Explain why you learn open the trade"
              className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              rows={3}
              value={learning}
              onChange={(e) => setLearning(e.target.value)}
            ></textarea>
          </div>

          {/* SUBMIT */}
          <div className="w-full flex justify-end gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-white/20 backdrop-blur-2xl border border-white/20 hover:bg-blue-700 transition cursor-pointer"
            >
              {/* Save Trade */}
              {loading ? "Creating..." : "Save Trade"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

