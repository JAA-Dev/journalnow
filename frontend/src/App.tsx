import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotP from "./pages/Forgot"
import NotFound404 from "./pages/NotFound404"

function App() {

  return (
    <>
      {/* <h1 className="text-center font-bold text-2xl">Hello World</h1> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotP />} />


        {/* 404 page */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default App
