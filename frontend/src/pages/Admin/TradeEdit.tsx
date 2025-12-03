import { Link } from "react-router-dom";
import AdminLayout from "../../UI/AdminLayout";
import { LucideArrowBigLeft } from "lucide-react";

export default function TradeEdit() {
  return (
    <AdminLayout>
        <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 w-full max-w-7xl">Edit Trade</h2>
        {/* BACK BUTTON */}
        <div className="w-full max-w-7xl mb-6">
          <Link
            to="/trade"
            className="w-fit flex items-center gap-1 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-2 cursor-pointer"
          >
            <LucideArrowBigLeft /> Back
          </Link>
        </div>
        </div>
    </AdminLayout>
  )
}
