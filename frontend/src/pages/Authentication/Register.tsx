import { useState } from "react";
import AuthLayout from "../../UI/AuthLayout";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    // alert(name + email + password + confirmPassword);
    register({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }).then((res) => {
      // console.log(res.data);
      if (res.data.errors) {
        setErrors(res.data.errors);
      }
      else{
        localStorage.setItem('user', JSON.stringify(res.data));
        localStorage.setItem('isAuthenticated', true);

        navigate('/');
      }
    });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border-white/30  rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h1>

        {/* display errors */}
        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-auto" role="alert">
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
            <label className="block mb-2 text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Re-enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600/80 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          Already have an account?{" "}
          <a href="/" className="underline font-medium">
            Login
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
