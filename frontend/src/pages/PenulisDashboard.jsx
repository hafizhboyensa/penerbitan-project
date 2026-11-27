const PenulisDashboard = ({ user }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Halaman Penulis</h2>
    <p>Halo {user.nama_lengkap}, di sini Anda bisa melihat pesanan Anda.</p>
  </div>
);
export default PenulisDashboard;