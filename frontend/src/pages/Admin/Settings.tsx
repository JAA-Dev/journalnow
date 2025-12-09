// import AdminLayout from "../../UI/AdminLayout";

// export default function Settings() {
//   return (
//     <AdminLayout>
//       <h2 className="text-2xl font-bold">Settings</h2>
//     </AdminLayout>
//   );
// }

import { useNavigate } from "react-router-dom";
import AdminLayout from "../../UI/AdminLayout";
import { useState } from "react";
import { profile } from "../../services/authService";
import { toast } from "react-toastify";

export default function Settings() {
  const [avatar, setAvatar] = useState<string>(
    "https://ui-avatars.com/api/?name=User"
  );
  const [preview, setPreview] = useState<string>("");
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Handle Avatar Upload
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const detailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    profile(
      {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      user.token
    ).then((res) => {
      if (res.data.errors) {
        setErrors(res.data.errors);
        toast.error("Error updating profile!");
      } else {
        localStorage.setItem("user", JSON.stringify({
          ...user,
          name: res.data.name,
          email: res.data.email
        }));

        // navigate("/settings");
        toast.success("Profile updated successfully!");
        navigate("/settings");
      }
    }).finally(() => setLoading(false));
  };

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* CHANGE AVATAR */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Change Avatar</h3>

          <div className="flex items-center gap-6">
            <img
              src={preview || avatar}
              className="w-24 h-24 rounded-full border border-white/20 object-cover"
            />

            <div>
              <label
                htmlFor="avatarInput"
                className="cursor-pointer px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg"
              >
                Upload New Avatar
              </label>
              <input
                id="avatarInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />

              {preview && (
                <button
                  className="block mt-3 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 cursor-pointer"
                  onClick={() => {
                    setAvatar(preview);
                    setPreview("");
                  }}
                >
                  Save Avatar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* PROFILE DETAILS */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          {/* display errors */}
          {errors.length > 0 && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <ul className="list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={detailSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-1">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10"
              />
            </div>

            {/* CONFIRM */}
            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 cursor-pointer"
              >
                {/* Save All Changes */}
                {loading ? "Updating..." : "Save All Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
