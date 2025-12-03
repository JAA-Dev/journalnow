// import AdminLayout from "../../UI/AdminLayout";

// export default function Calendar() {
//   return (
//     <AdminLayout>
//       <h2 className="text-2xl font-bold">Calendar</h2>
//     </AdminLayout>
//   );
// }

import AdminLayout from "../../UI/AdminLayout";
import { useState } from "react";

export default function Calendar() {
  // Dummy PnL data per day
  const dummyPnL: Record<string, number> = {
    "2025-12-01": 120,
    "2025-12-02": -50,
    "2025-12-03": 300,
    "2025-12-04": -120,
    "2025-12-05": 500,
    "2025-12-06": -80,
    "2025-12-07": 200,
    "2025-12-08": 0,
    "2025-12-09": 150,
    "2025-12-10": -200,
  };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  // Generate days for calendar
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const dates: Array<number | null> = [];

  for (let i = 0; i < startingDay; i++) dates.push(null);
  for (let i = 1; i <= daysInMonth; i++) dates.push(i);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">PnL Calendar</h2>

      {/* Glass container */}
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevMonth}
            className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30"
          >
            ◀
          </button>

          <h3 className="text-xl font-bold">
            {monthName} {currentYear}
          </h3>

          <button
            onClick={nextMonth}
            className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30"
          >
            ▶
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-center font-semibold mb-3">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 gap-3">
          {dates.map((day, i) => {
            const fullDate =
              day !== null
                ? `${currentYear}-${String(currentMonth + 1).padStart(
                    2,
                    "0"
                  )}-${String(day).padStart(2, "0")}`
                : null;

            const pnl = fullDate ? dummyPnL[fullDate] : null;

            return (
              <div
                key={i}
                className="h-24 bg-white/10 dark:bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-between backdrop-blur-md"
              >
                <span className="text-sm opacity-80">{day ?? ""}</span>

                {pnl !== undefined && (
                  <span
                    className={`text-sm font-bold ${
                      pnl > 0
                        ? "text-green-400"
                        : pnl < 0
                        ? "text-red-400"
                        : "text-gray-300"
                    }`}
                  >
                    {pnl > 0 ? "+" : ""}
                    {pnl}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
}
