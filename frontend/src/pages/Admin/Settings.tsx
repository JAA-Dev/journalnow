// import AdminLayout from "../../UI/AdminLayout";

// export default function Settings() {
//   return (
//     <AdminLayout>
//       <h2 className="text-2xl font-bold">Settings</h2>
//     </AdminLayout>
//   );
// }


import AdminLayout from "../../UI/AdminLayout";
import { useState } from "react";

export default function Settings() {
  const [avatar, setAvatar] = useState<string>("https://ui-avatars.com/api/?name=User");
  const [preview, setPreview] = useState<string>("");

  // Handle Avatar Upload
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="max-w-3xl mx-auto space-y-10">

        {/* =============================== */}
        {/* CHANGE AVATAR */}
        {/* =============================== */}
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
                  className="block mt-3 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30"
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

        {/* =============================== */}
        {/* PROFILE DETAILS */}
        {/* =============================== */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10 outline-none placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10 outline-none placeholder-gray-300"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* =============================== */}
        {/* CHANGE PASSWORD */}
        {/* =============================== */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10 outline-none placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10 outline-none placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/10 outline-none placeholder-gray-300"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
