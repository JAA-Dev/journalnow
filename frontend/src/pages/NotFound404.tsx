import AuthLayout from "../UI/AuthLayout";

const NotFound404 = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border-white/30  rounded-2xl shadow-xl p-8">
        <h1 className="text-7xl font-extrabold text-center drop-shadow mb-6">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-white/80 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600/80 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </AuthLayout>
  );
};

export default NotFound404;
