import { type ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Settings,
  LogOut,
  CalendarArrowUp,
  NotebookTextIcon,
} from "lucide-react";
import BG from "../assets/images/line.jpg";
import { toast } from "react-toastify";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    setLoading(true);

    toast.info("Logging out...", { autoClose: 1000 });

    setTimeout(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");

      toast.success("Logged out successfully!");

      setTimeout(() => navigate("/"), 1000);
    }, 1000);
  };

  return (
    <div
      className="relative flex min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* MAIN WRAPPER */}
      <div className="relative flex flex-1">

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-55 p-4
            bg-white/10 backdrop-blur-2xl border-r border-white/20 
            shadow-2xl rounded-r-2xl
            transform transition-transform duration-300 lg:hidden
            ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="mb-6 text-gray-300 hover:text-white flex items-center gap-2"
            onClick={() => setMobileMenu(false)}
          >
            <X size={20} /> Close
          </button>

          <nav className="space-y-4">
            <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-300">
              <LayoutDashboard size={20} /> Dashboard
            </Link>

            <Link to="/trade" className="flex items-center gap-3 hover:text-blue-300">
              <NotebookTextIcon size={20} /> Trade
            </Link>

            <Link to="/calendar" className="flex items-center gap-3 hover:text-blue-300">
              <CalendarArrowUp size={20} /> Calendar PNL
            </Link>

            <Link to="/settings" className="flex items-center gap-3 hover:text-blue-300">
              <Settings size={20} /> Settings
            </Link>
          </nav>
        </div>

        {/* MOBILE OVERLAY */}
        {mobileMenu && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenu(false)}
          />
        )}

        {/* DESKTOP SIDEBAR (FIXED LEFT) */}
        <div
          className={`hidden lg:flex flex-col p-4
            fixed left-0 top-0 h-screen
            bg-white/10 backdrop-blur-2xl border-r border-white/20 
            shadow-xl z-40
            transition-all duration-300
            ${open ? "w-55" : "w-20"}`}
        >
          <button
            className="mb-6 text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className="space-y-4">
            <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-300">
              <LayoutDashboard size={20} />
              {open && "Dashboard"}
            </Link>

            <Link to="/trade" className="flex items-center gap-3 hover:text-blue-300">
              <NotebookTextIcon size={20} />
              {open && "Trade"}
            </Link>

            <Link to="/calendar" className="flex items-center gap-3 hover:text-blue-300">
              <CalendarArrowUp size={20} />
              {open && "Calendar PNL"}
            </Link>

            <Link to="/settings" className="flex items-center gap-3 hover:text-blue-300">
              <Settings size={20} />
              {open && "Settings"}
            </Link>
          </nav>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="flex-1 flex flex-col transition-all duration-300"
          style={{
            marginLeft: open ? "220px" : "80px", // matches w-55 and w-20
          }}
        >
          {/* NAVBAR */}
          <div
            className="
              sticky top-0 z-30
              bg-white/10 backdrop-blur-2xl
              border-b border-white/20 shadow-xl
              p-4 flex justify-between items-center
            "
          >
            {/* MOBILE MENU */}
            <button
              className="lg:hidden p-2 bg-white/10 rounded hover:bg-white/20"
              onClick={() => setMobileMenu(true)}
            >
              <Menu />
            </button>

            <h1 className="font-semibold text-lg drop-shadow-lg">JournalNow</h1>

            {/* DROPDOWN */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 border border-white/20"
                onClick={() => setDropdown(!dropdown)}
              >
                <img
                  src="https://ui-avatars.com/api/?name=Admin"
                  className="w-8 h-8 rounded-full border border-white/20"
                />
                <h3 className="font-bold">{user.name}</h3>
              </button>

              {dropdown && (
                <div
                  className="
                    absolute right-0 mt-2 w-40
                    bg-white/10 backdrop-blur-xl
                    border border-white/20 shadow-xl
                    rounded-lg p-2 z-50
                  "
                >
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/20"
                  >
                    <Settings size={18} /> Settings
                  </Link>

                  <a
                    onClick={logout}
                    className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-white/20 text-red-300 cursor-pointer"
                  >
                    {loading && (
                      <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                    )}
                    <LogOut size={18} /> Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* PAGE CONTENT */}
          <main className="p-6 flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
