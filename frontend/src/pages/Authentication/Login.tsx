// import { useState } from "react";
// import { login } from "../../services/authService";
// import AuthLayout from "../../UI/AuthLayout";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const navigate = useNavigate();

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors([]);
//     login({ email: email, password: password }).then((res) => {
//       if (res.data.errors) {
//         setErrors(res.data.errors);
//       } else {
//         localStorage.setItem("user", JSON.stringify(res.data));
//         localStorage.setItem("isAuthenticated", true);

//         navigate("/dashboard");
//       }
//     });
//   };
//   return (
//     <AuthLayout>
//       <div className="w-full max-w-md bg-white/20 backdrop-blur-md border-white/30  rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-center text-white mb-6">
//           JournalNow
//         </h1>
//         {/* display errors */}
//         {errors.length > 0 && (
//           <div
//             className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
//             role="alert"
//           >
//             <strong className="font-bold">Error!</strong>
//             <ul className="list-disc list-inside">
//               {errors.map((error, index) => (
//                 <li key={index}>{error}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <form onSubmit={submit} className="space-y-5">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-white">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-white">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="text-right">
//             <a
//               href="/forgot"
//               className="mb-4 text-sm font-medium text-white underline"
//             >
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600/80 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4 text-white">
//           Don't have an account?{" "}
//           <a href="/register" className="underline font-medium">
//             Register
//           </a>
//         </p>
//       </div>
//     </AuthLayout>
//   );
// };

// export default Login;



import { useState } from "react";
import { login } from "../../services/authService";
import AuthLayout from "../../UI/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    toast.info("Checking credentials...", { autoClose: 1000 });

    login({ email: email, password: password })
      .then((res) => {
        setLoading(false);

        if (res.data.errors) {
          setErrors(res.data.errors);
          toast.error("Invalid credentials");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("isAuthenticated", "true");

          toast.success("Login successful!");

          setTimeout(() => {
            navigate("/dashboard");
          }, 1200);
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Server Error. Please try again.");
      });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border-white/30 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">JournalNow</h1>

        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-80" role="alert">
            <strong className="font-bold">Error!</strong>
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right">
            <a href="/forgot" className="mb-4 text-sm font-medium text-white underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600/80 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer flex justify-center items-center gap-2"
          >
            {loading && (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          Don't have an account?{" "}
          <a href="/register" className="underline font-medium">
            Register
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;

