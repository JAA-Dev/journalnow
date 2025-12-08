import AuthLayout from "../../UI/AuthLayout";

const Forgot = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border-white/30  rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Forgot Password
        </h1>

        <p className="text-white/80 text-center mb-6 text-sm">
          Enter your email we will send you a password reset link.
        </p>

        <form action="#" className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 bg-white/40 border border-white/30 text-black placeholder-black/70 rounded-lg focus:outline-none focus:ring-1"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600/80 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          Back to{" "}
          <a href="/" className="underline font-medium">
            Login
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Forgot;
