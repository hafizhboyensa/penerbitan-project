import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = ({ user }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
      <p className="mb-4">Selamat datang, {user.nama_lengkap}</p>
      <table className="bg-white w-full text-left">
        <thead><tr><th className="p-2">Nama</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id_pengguna}><td className="p-2">{u.nama_lengkap}</td><td>{u.email}</td><td>{u.role}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminDashboard;