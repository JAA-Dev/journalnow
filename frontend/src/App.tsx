import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotP from "./pages/Forgot"
import NotFound404 from "./pages/NotFound404"
import Dashboard from "./pages/Admin/Dashboard"
import Trade from "./pages/Admin/Trade"
import Calendar from "./pages/Admin/Calendar"
import Settings from "./pages/Admin/Settings"
import CreateTrade from "./pages/Admin/TradeCreate"
import EditTrade from "./pages/Admin/TradeEdit"

function App() {

  return (
    <>
      {/* <h1 className="text-center font-bold text-2xl">Hello World</h1> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotP />} />

        {/* admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/trade/create" element={<CreateTrade />} />
        <Route path="/trade/edit/:id" element={<EditTrade/>} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />


        {/* 404 page */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default App
