import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post("/api/auth/logout");
        setUser(null);
        navigate("/");
    }
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <Link to="/" className="font-bold">
                AUTH
            </Link>
            <div>
                {user ? (
                    <>
                        {user.role === "admin" && <Link to="/admin" className="mx-2">Kelola User</Link>}
                        {user.role === "penulis" && <Link to="/penulis" className="mx-2">Pesanan Saya</Link>}
                        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mx-2">
                            Login
                        </Link>
                        <Link to="/register" className="mx-2">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar
