import { useState } from "react";
import { Link } from "react-router-dom";

const EyeIcon = ({ open }) =>
  open ? (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <path
        d="M2.5 2.5L17.5 17.5"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.81667 8.81667C8.50833 9.125 8.33333 9.54167 8.33333 10C8.33333 10.9205 9.07952 11.6667 10 11.6667C10.4583 11.6667 10.875 11.4917 11.1833 11.1833"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.675 14.675C13.2583 15.6167 11.6667 16.0833 10 16.0833C6.25 16.0833 3.04167 13.75 1.71667 10.3333C2.36667 8.65833 3.45833 7.21667 4.825 6.13333"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.95833 4.19167C8.625 4 9.30833 3.91667 10 3.91667C13.75 3.91667 16.9583 6.25 18.2833 9.66667C17.9 10.6583 17.3417 11.5667 16.6333 12.35"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <path
        d="M1.71875 10.2894C1.6493 10.1023 1.6493 9.8965 1.71875 9.7094C2.39517 8.06928 3.54335 6.66693 5.01773 5.68015C6.49211 4.69337 8.22629 4.16658 10.0004 4.16658C11.7746 4.16658 13.5087 4.69337 14.9831 5.68015C16.4575 6.66693 17.6057 8.06928 18.2821 9.7094C18.3515 9.8965 18.3515 10.1023 18.2821 10.2894C17.6057 11.9295 16.4575 13.3319 14.9831 14.3186C13.5087 15.3054 11.7746 15.8322 10.0004 15.8322C8.22629 15.8322 6.49211 15.3054 5.01773 14.3186C3.54335 13.3319 2.39517 11.9295 1.71875 10.2894Z"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="#62748E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full bg-[#1E3A5F] flex flex-col justify-between relative overflow-hidden font-inter">
      {/* Decorative Background */}
      <div className="rounded-full bg-[#FE9A00]/15 w-96 h-96 absolute -right-16 -top-24 pointer-events-none" />
      <div className="rounded-full bg-[#3B6998]/30 w-[448px] h-[448px] absolute -left-24 -bottom-24 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 27px, #ffffff 27px)",
          backgroundSize: "100% 28px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 w-full max-w-[1280px] mx-auto py-5 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 rounded-lg">
          <div className="flex px-1.5 justify-center items-center rounded-lg bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] w-14 h-10 shrink-0">
            <img
              src="/Image.png"
              className="w-11 h-[30px] object-contain"
              alt="Logo Langsung Terbit"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white text-[15px] font-extrabold leading-[15px] tracking-[0.06em]">
              Langsung Terbit
            </span>
            <span className="mt-1 text-[#C3D2E4] text-[10px] font-semibold leading-[10px] tracking-[0.14em]">
              CV · Penerbit Buku
            </span>
          </div>
        </Link>

        <Link
          to="/"
          className="flex min-h-[44px] px-2 items-center gap-1.5 rounded-lg text-[#E1E9F2] hover:text-white transition-colors"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6667 8H6"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium leading-5">Beranda</span>
        </Link>
      </header>

      {/* Register Card */}
      <main className="relative z-10 flex-1 flex justify-center items-center px-4 sm:px-6 py-8">
        <div className="w-full max-w-[512px] p-6 sm:p-10 rounded-2xl bg-white shadow-[0_12px_40px_-8px_rgba(15,23,42,0.22)]">
          <h1 className="text-[#0F172B] text-2xl sm:text-[32px] font-bold leading-tight sm:leading-10">
            Buat akun penulis
          </h1>
          <p className="mt-2 text-[#45556C] text-sm sm:text-base leading-6">
            Isi data di bawah ini untuk mulai mengajukan naskah.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="register-fullname"
                className="block text-[#1D293D] text-sm font-medium leading-5 mb-1.5"
              >
                Nama Lengkap
              </label>
              <input
                id="register-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="cth. Dr. Rina Kartika Sari, M.Pd."
                required
                className="w-full h-11 px-3.5 rounded-lg border border-slate-200 bg-white text-[#0F172B] placeholder:text-[#90A1B9] text-base outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 transition"
              />
              <p className="mt-1.5 text-[#62748E] text-xs leading-4">
                Tulis lengkap beserta gelar, sesuai yang akan dicantumkan di
                buku.
              </p>
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="block text-[#1D293D] text-sm font-medium leading-5 mb-1.5"
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-slate-200 bg-white text-[#0F172B] placeholder:text-[#90A1B9] text-base outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 transition"
              />
            </div>

            <div>
              <label
                htmlFor="register-phone"
                className="block text-[#1D293D] text-sm font-medium leading-5 mb-1.5"
              >
                Nomor Kontak
              </label>
              <input
                id="register-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-slate-200 bg-white text-[#0F172B] placeholder:text-[#90A1B9] text-base outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 transition"
              />
              <p className="mt-1.5 text-[#62748E] text-xs leading-4">
                Nomor WhatsApp aktif untuk konfirmasi bila diperlukan.
              </p>
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="block text-[#1D293D] text-sm font-medium leading-5 mb-1.5"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 8 karakter"
                  required
                  className="w-full h-11 pl-3.5 pr-11 rounded-lg border border-slate-200 bg-white text-[#0F172B] placeholder:text-[#90A1B9] text-base outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 transition"
                />
                <button
                  type="button"
                  aria-label={
                    showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer absolute right-0 top-0 w-11 h-11 flex justify-center items-center rounded-lg hover:bg-slate-100/70 transition-colors"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              <p className="mt-1.5 text-[#62748E] text-xs leading-4">
                Minimal 8 karakter, kombinasikan huruf besar, angka, dan simbol.
              </p>
            </div>

            <div>
              <label
                htmlFor="register-confirm-password"
                className="block text-[#1D293D] text-sm font-medium leading-5 mb-1.5"
              >
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="register-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi kata sandi"
                  required
                  className="w-full h-11 pl-3.5 pr-11 rounded-lg border border-slate-200 bg-white text-[#0F172B] placeholder:text-[#90A1B9] text-base outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 transition"
                />
                <button
                  type="button"
                  aria-label={
                    showConfirmPassword
                      ? "Sembunyikan konfirmasi kata sandi"
                      : "Lihat konfirmasi kata sandi"
                  }
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="cursor-pointer absolute right-0 top-0 w-11 h-11 flex justify-center items-center rounded-lg hover:bg-slate-100/70 transition-colors"
                >
                  <EyeIcon open={showConfirmPassword} />
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="mt-0.5 w-5 h-5 rounded-md border border-slate-300 accent-[#1E3A5F] shrink-0 cursor-pointer"
              />
              <span className="text-[#1E3A5F] text-sm font-semibold leading-[22.75px]">
                Saya menyetujui Syarat &amp; Ketentuan serta Kebijakan Privasi
                CV. Literasi Langsung Terbit.
              </span>
            </label>

            <button
              type="submit"
              className="cursor-pointer w-full h-12 px-6 flex justify-center items-center rounded-lg bg-[#1E3A5F] hover:bg-[#172E4B] transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] text-white text-base font-semibold"
            >
              Daftar
            </button>
          </form>

          <div className="pt-6 text-center">
            <Link
              to="/login"
              className="text-[#1E3A5F] hover:underline text-sm font-semibold leading-5"
            >
              Sudah punya akun? Masuk di sini
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center">
        <p className="text-[#C3D2E4] text-sm leading-5">
          © 2026 CV. Literasi Langsung Terbit · Yogyakarta
        </p>
      </footer>
    </div>
  );
}
