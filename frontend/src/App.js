import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import PenulisDashboard from "./pages/PenulisDashboard.jsx";
import { getHomePath } from "./utils/roles.js";
import NotFound from "./components/NotFound.jsx";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcUser = async () => {
      try {
        const res = await axios.get("/api/auth/me")
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetcUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} error={error} />} />
        <Route path="/login" element={user ? <Navigate to={getHomePath(user.role)} /> : <Login setUser={setUser} />} />
        <Route path="/register" element={user ? <Navigate to={getHomePath(user.role)} /> : <Register setUser={setUser} />} />

        <Route path="/admin" element={
          <ProtectedRoute user={user} allowedRoles={["admin"]}>
            <AdminDashboard user={user} />
          </ProtectedRoute>
        } />

        <Route path="/penulis" element={
          <ProtectedRoute user={user} allowedRoles={["penulis"]}>
            <PenulisDashboard user={user} />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;