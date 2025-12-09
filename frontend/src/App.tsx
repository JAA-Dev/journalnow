// import { Route, Routes, useLocation } from "react-router-dom"
// import Login from "./pages/Authentication/Login"
// import Register from "./pages/Authentication/Register"
// import ForgotP from "./pages/Authentication/Forgot"
// import NotFound404 from "./pages/NotFound404"
// import Dashboard from "./pages/Admin/Dashboard"
// import Trade from "./pages/Admin/Trade"
// import Calendar from "./pages/Admin/Calendar"
// import Settings from "./pages/Admin/Settings"
// import CreateTrade from "./pages/Admin/TradeCreate"
// import EditTrade from "./pages/Admin/TradeEdit"
// import { useEffect, useState } from "react"

// function App() {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     setIsAuthenticated(auth === 'true');
//   }, [location]);

//   return (
//     <>
//       {/* <h1 className="text-center font-bold text-2xl">Hello World</h1> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot" element={<ForgotP />} />

//         {/* admin */}
//         {isAuthenticated && (
//           <>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/trade" element={<Trade />} />
//             <Route path="/trade/create" element={<CreateTrade />} />
//             <Route path="/trade/edit/:id" element={<EditTrade/>} />
//             <Route path="/calendar" element={<Calendar />} />
//             <Route path="/settings" element={<Settings />} />
//           </>
//         )}


//         {/* 404 page */}
//         <Route path="*" element={<NotFound404 />} />
//       </Routes>
//     </>
//   )
// }

// export default App


import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotP from "./pages/Authentication/Forgot";
import NotFound404 from "./pages/NotFound404";
import Dashboard from "./pages/Admin/Dashboard";
import Trade from "./pages/Admin/Trade";
import Calendar from "./pages/Admin/Calendar";
import Settings from "./pages/Admin/Settings";
import CreateTrade from "./pages/Admin/TradeCreate";
import EditTrade from "./pages/Admin/TradeEdit";
import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotP />} />

        {/* Protected Routes */}
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/trade/create" element={<CreateTrade />} />
            <Route path="/trade/edit/:id" element={<EditTrade />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </>
        )}

        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {/* REQUIRED FOR TOASTIFY */}
      <ToastContainer position="top-right" autoClose={1500} style={{ zIndex: 999999 }} />
    </>
  );
}

export default App;

