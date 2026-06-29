import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import RSVP from "./pages/RSVP";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/rsvp" element={<RSVP />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
