import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login } from "../services/authService";

function useAdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    if (!username.trim()) {
      toast.error("Username is required.");

      return;
    }

    if (!password.trim()) {
      toast.error("Password is required.");

      return;
    }

    try {
      setLoading(true);

      await login(username, password);

      toast.success("Welcome back!");

      navigate("/admin");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Invalid username or password."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    username,
    setUsername,

    password,
    setPassword,

    loading,

    handleLogin,
  };
}

export default useAdminLogin;
