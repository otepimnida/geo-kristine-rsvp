import { motion } from "framer-motion";
import { FaLock, FaUser } from "react-icons/fa";

import useAdminLogin from "../hooks/useAdminLogin";
import { theme } from "../styles/theme";

function AdminLogin() {
  const {
    username,
    setUsername,

    password,
    setPassword,

    loading,

    handleLogin,
  } = useAdminLogin();

  return (
    <main
      className="flex min-h-screen items-center justify-center px-6"
      style={{
        background: `linear-gradient(135deg,
          ${theme.colors.background},
          #FFF8F5,
          ${theme.colors.background})`,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full max-w-md rounded-3xl p-10 shadow-2xl"
        style={{
          background: "white",
        }}
      >
        <div className="text-center">
          <p
            className="mb-2 uppercase tracking-[0.35em] text-sm"
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
            }}
          >
            Geo & Kristine
          </p>

          <h1
            className="text-4xl"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            Admin Login
          </h1>

          <p
            className="mt-3"
            style={{
              color: theme.colors.secondary,
            }}
          >
            Sign in to manage wedding RSVPs.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">
          <div>
            <label
              className="mb-2 block text-sm"
              style={{
                color: theme.colors.primary,
              }}
            >
              Username
            </label>

            <div className="relative">
              <FaUser
                className="absolute left-4 top-1/2 -translate-y-1/2"
                color={theme.colors.secondary}
              />

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label
              className="mb-2 block text-sm"
              style={{
                color: theme.colors.primary,
              }}
            >
              Password
            </label>

            <div className="relative">
              <FaLock
                className="absolute left-4 top-1/2 -translate-y-1/2"
                color={theme.colors.secondary}
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:ring-2"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 text-white transition disabled:opacity-60"
            style={{
              background: theme.colors.primary,
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </main>
  );
}

export default AdminLogin;
