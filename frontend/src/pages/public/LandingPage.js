import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CheckIcon = ({ className = "w-4 h-4 shrink-0" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.3333 4L5.99999 11.3333L2.66666 8"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#00A63E"
    />
  </svg>
);

const UsersSmallIcon = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 shrink-0"
  >
    <path
      d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H3.5C2.96957 7.5 2.46086 7.71071 2.08579 8.08579C1.71071 8.46086 1.5 8.96957 1.5 9.5V10.5"
      stroke="#314158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5.5C6.10457 5.5 7 4.60457 7 3.5C7 2.39543 6.10457 1.5 5 1.5C3.89543 1.5 3 2.39543 3 3.5C3 4.60457 3.89543 5.5 5 5.5Z"
      stroke="#314158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 10.435V9.435C10.4997 8.99187 10.3522 8.56139 10.0807 8.21116C9.80919 7.86093 9.42907 7.61078 9 7.5"
      stroke="#314158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 1.5C8.92888 1.61119 9.3087 1.86163 9.57984 2.21203C9.85098 2.56243 9.9981 2.99295 9.9981 3.436C9.9981 3.87906 9.85098 4.30957 9.57984 4.65997C9.3087 5.01037 8.92888 5.26082 8.5 5.372"
      stroke="#314158"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldOffSmallIcon = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 shrink-0"
  >
    <path
      d="M1 1L11 11"
      stroke="#45556C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 3.5C2.36739 3.5 2.24021 3.55268 2.14645 3.64645C2.05268 3.74021 2 3.86739 2 4V6.5C2 9 3.75 10.25 5.835 10.97C5.94277 11.0101 6.06108 11.0119 6.17 10.975C7.345 10.565 8.41 9.99 9.12 9.12"
      stroke="#45556C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 2.326C4.84323 2.12906 5.16658 1.89931 5.4655 1.64C5.57143 1.5495 5.70618 1.49978 5.8455 1.49978C5.98482 1.49978 6.11957 1.5495 6.2255 1.64C7.1005 2.405 8.3455 3 9.3455 3C9.47811 3 9.60529 3.05268 9.69905 3.14645C9.79282 3.24021 9.8455 3.36739 9.8455 3.5V7C9.84583 7.21131 9.83247 7.42242 9.8055 7.632"
      stroke="#45556C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldCheckSmallIcon = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 shrink-0"
  >
    <path
      d="M10 6.5C10 8.8 8.2 10.1 6.18 10.82C6.065 10.86 5.94 10.858 5.827 10.815C3.8 10.1 2 8.8 2 6.5V3C2 2.86739 2.05268 2.74021 2.14645 2.64645C2.24021 2.55268 2.36739 2.5 2.5 2.5C3.5 2.5 4.75 1.9 5.62 1.14C5.726 1.05 5.861 1 6 1C6.139 1 6.274 1.05 6.38 1.14C7.255 1.905 8.5 2.5 9.5 2.5C9.63261 2.5 9.75979 2.55268 9.85355 2.64645C9.94732 2.74021 10 2.86739 10 3V6.5Z"
      stroke="#008236"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 6L5.5 7L7.5 5"
      stroke="#008236"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0"
  >
    <path
      d="M1.375 8.2316C1.31944 8.08193 1.31944 7.91728 1.375 7.7676C1.91613 6.45551 2.83467 5.33363 4.01417 4.5442C5.19367 3.75477 6.58102 3.33334 8.00033 3.33334C9.41963 3.33334 10.807 3.75477 11.9865 4.5442C13.166 5.33363 14.0845 6.45551 14.6257 7.7676C14.6812 7.91728 14.6812 8.08193 14.6257 8.2316C14.0845 9.5437 13.166 10.6656 11.9865 11.455C10.807 12.2444 9.41963 12.6659 8.00033 12.6659C6.58102 12.6659 5.19367 12.2444 4.01417 11.455C2.83467 10.6656 1.91613 9.5437 1.375 8.2316Z"
      stroke="#1E3A5F"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="#1E3A5F"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightSmall = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0"
  >
    <path
      d="M3 8H12.3333"
      stroke="#CAD5E2"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.66667 3.33334L12.3333 8L7.66667 12.6667"
      stroke="#CAD5E2"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PACKAGES = [
  {
    id: 1,
    label: "Paket 1",
    name: "Paket Hemat",
    description:
      "Naskah dimasukkan ke template penerbit sendiri dan wajib lolos Turnitin maks. 30%.",
    price: "Rp 500.000",
    priceNote: "Sudah termasuk ISBN",
    priceNoteGreen: false,
    topBarColor: "bg-[#FE9A00]",
    iconBg: "bg-[#FEF3C6]",
    badge: { text: "Terlaris · Hot Sale", className: "bg-[#E7000B] text-white" },
    authorsBadge: "Maks. 1 penulis",
    hakiIncluded: false,
    hakiNote: null,
    features: [
      "Free ISBN",
      "Layout & Desain Cover Profesional",
      "E-Book ber-ISBN",
      "Free 2 Buku Fisik",
    ],
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M9.99999 2.5C10.5555 4.72222 11.6667 6.52778 13.3333 7.91667C15 9.30556 15.8333 10.8333 15.8333 12.5C15.8333 14.0471 15.2187 15.5308 14.1248 16.6248C13.0308 17.7188 11.5471 18.3333 9.99999 18.3333C8.45289 18.3333 6.96916 17.7188 5.8752 16.6248C4.78124 15.5308 4.16666 14.0471 4.16666 12.5C4.16666 11.5985 4.45906 10.7212 4.99999 10C4.99999 10.5525 5.21948 11.0824 5.61018 11.4731C6.00088 11.8638 6.53079 12.0833 7.08332 12.0833C7.63586 12.0833 8.16576 11.8638 8.55646 11.4731C8.94716 11.0824 9.16666 10.5525 9.16666 10C9.16666 8.33333 7.91666 7.5 7.91666 5.83333C7.91666 4.72222 8.6111 3.61111 9.99999 2.5Z"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#BB4D00"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Paket 2",
    name: "Paket Standar",
    description:
      "Tanpa repot template — penerbit yang menyesuaikan. Wajib lolos Turnitin maks. 30%.",
    price: "Rp 750.000",
    priceNote: "Sudah termasuk ISBN",
    priceNoteGreen: false,
    topBarColor: "bg-[#0084D1]",
    iconBg: "bg-[#DFF2FE]",
    badge: null,
    authorsBadge: "Maks. 1 penulis",
    hakiIncluded: false,
    hakiNote: null,
    features: [
      "Penerbit menyesuaikan naskah ke template",
      "Free ISBN",
      "E-Book ber-ISBN",
      "Free 2 Buku Fisik",
    ],
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M5 18.3333C4.55797 18.3333 4.13405 18.1577 3.82149 17.8452C3.50893 17.5326 3.33333 17.1087 3.33333 16.6667V3.33334C3.33333 2.89131 3.50893 2.46739 3.82149 2.15483C4.13405 1.84227 4.55797 1.66667 5 1.66667H11.6667C11.9305 1.66624 12.1917 1.718 12.4354 1.81898C12.6791 1.91995 12.9005 2.06814 13.0867 2.255L16.0767 5.245C16.264 5.43127 16.4126 5.6528 16.5139 5.89681C16.6152 6.14081 16.6671 6.40248 16.6667 6.66667V16.6667C16.6667 17.1087 16.4911 17.5326 16.1785 17.8452C15.8659 18.1577 15.442 18.3333 15 18.3333H5Z"
          stroke="#0069A8"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 1.66667V5.83334C11.6667 6.05435 11.7545 6.26632 11.9107 6.4226C12.067 6.57888 12.279 6.66667 12.5 6.66667H16.6667"
          stroke="#0069A8"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33333 7.5H6.66667"
          stroke="#0069A8"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 10.8333H6.66667"
          stroke="#0069A8"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 14.1667H6.66667"
          stroke="#0069A8"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Paket 3",
    name: "Paket Komplit",
    description:
      "Terima beres: parafrase, cek Turnitin, dan template dikerjakan penerbit.",
    price: "Rp 1.000.000",
    priceNote: "Sudah termasuk ISBN",
    priceNoteGreen: false,
    topBarColor: "bg-[#009966]",
    iconBg: "bg-[#D0FAE5]",
    badge: null,
    authorsBadge: "Maks. 3 penulis",
    hakiIncluded: false,
    hakiNote: null,
    features: [
      "Parafrase & Cek Turnitin",
      "E-Book ber-Standar ISBN",
      "Terindeks Google Scholar & OMP",
      "Free 3 Buku Fisik",
    ],
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M17.5 9.2708V6.66497C17.4997 6.37269 17.4225 6.08564 17.2763 5.8326C17.13 5.57957 16.9198 5.36943 16.6667 5.2233L10.8333 1.88997C10.58 1.74369 10.2926 1.66668 10 1.66668C9.70745 1.66668 9.42004 1.74369 9.16668 1.88997L3.33334 5.2233C3.08023 5.36943 2.86999 5.57957 2.72373 5.8326C2.57746 6.08564 2.50031 6.37269 2.50001 6.66497V13.3316C2.50046 13.6238 2.57768 13.9107 2.72394 14.1635C2.87019 14.4164 3.08035 14.6264 3.33334 14.7725L9.16668 18.1058C9.41996 18.2522 9.70733 18.3293 9.9999 18.3295C10.2925 18.3297 10.5799 18.2528 10.8333 18.1066L11.9333 17.4791"
          stroke="#007A55"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 5.83334L10 10L17.25 5.83334"
          stroke="#007A55"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 18.3333V10"
          stroke="#007A55"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 14.1667L15 15.8333L18.3333 12.5"
          stroke="#007A55"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Paket 4",
    name: "Paket Konversi Buku",
    description:
      "Skripsi, tesis, disertasi, atau laporan penelitian dikonversi menjadi buku ber-ISBN.",
    price: "Rp 1.250.000",
    priceNote: "Special Price + HAKI Rp 1.450.000",
    priceNoteGreen: true,
    topBarColor: "bg-[#C800DE]",
    iconBg: "bg-[#FAE8FF]",
    badge: null,
    authorsBadge: "Maks. 3 penulis",
    hakiIncluded: true,
    hakiNote: "· opsi Special Price",
    features: [
      "Dari skripsi/tesis/disertasi/penelitian",
      "Parafrase & Cek Turnitin",
      "ISBN",
      "Free 3 Buku Fisik",
    ],
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M3.33334 16.25C3.33334 15.6975 3.55284 15.1676 3.94354 14.7769C4.33424 14.3862 4.86414 14.1667 5.41668 14.1667H16.6667"
          stroke="#A800B7"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.41668 1.66667H16.6667V18.3333H5.41668C4.86414 18.3333 4.33424 18.1138 3.94354 17.7231C3.55284 17.3324 3.33334 16.8025 3.33334 16.25V3.75001C3.33334 3.19747 3.55284 2.66757 3.94354 2.27687C4.33424 1.88617 4.86414 1.66667 5.41668 1.66667Z"
          stroke="#A800B7"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Paket 5",
    name: "Buku Kolaborasi",
    description:
      "Satu buku ditulis bersama — satu penulis menulis satu bab atau lebih.",
    price: "Rp 150.000 / bab",
    priceSubtle: true,
    priceNote: "Bab 1 = Rp 300.000",
    priceNoteGreen: false,
    topBarColor: "bg-[#0092B8]",
    iconBg: "bg-[#CEFAFE]",
    badge: null,
    authorsBadge: "1 penulis per bab",
    hakiIncluded: false,
    hakiNote: null,
    features: [
      "ISBN",
      "Sertifikat Penulis",
      "E-Book ber-ISBN",
      "Terindeks Google Scholar",
    ],
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99999 12.5H4.99999C4.11593 12.5 3.26809 12.8512 2.64297 13.4763C2.01785 14.1014 1.66666 14.9493 1.66666 15.8333V17.5"
          stroke="#007595"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.50001 9.16667C9.34096 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34096 2.5 7.50001 2.5C5.65906 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65906 9.16667 7.50001 9.16667Z"
          stroke="#007595"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 17.5V15.8333C18.3328 15.0948 18.087 14.3773 17.6345 13.7936C17.182 13.2099 16.5484 12.793 15.8333 12.6083"
          stroke="#007595"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 2.60834C14.0503 2.79192 14.6858 3.20892 15.1397 3.79359C15.5935 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57765 15.5935 7.29674 15.1397 7.88141C14.6858 8.46609 14.0503 8.88309 13.3333 9.06667"
          stroke="#007595"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Paket 6",
    name: "Paket Profesional",
    description:
      "Cukup berikan ide/topik — penerbit menuliskan 1 buku penuh. Sudah termasuk HAKI.",
    price: "Rp 4.000.000",
    priceNote: "Sudah termasuk HAKI & ISBN",
    priceNoteGreen: false,
    topBarColor: "bg-[#1E3A5F]",
    iconBg: "bg-[#1E3A5F]",
    badge: { text: "Terima Beres", className: "bg-[#FE9A00] text-[#0F172B]" },
    authorsBadge: "Maks. 3 penulis",
    hakiIncluded: true,
    hakiNote: null,
    features: [
      "Cukup beri ide/topik",
      "ISBN & HAKI",
      "Royalti 20%",
      "Free 4 Buku Fisik Hard Cover",
    ],
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
          stroke="#FFB900"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.84167 11.575L5.83333 17.5L10 15L14.1667 17.5L13.1583 11.5667"
          stroke="#FFB900"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const PIPELINE_STEPS = [
  {
    label: "Naskah Diterima",
    pillBg: "bg-[#EFF6FF]",
    dotBg: "bg-[#155DFC]",
    textColor: "text-[#1447E6]",
    ring: "shadow-[0_0_0_1px_rgba(21,93,252,0.2)_inset]",
  },
  {
    label: "Proses Editing",
    pillBg: "bg-[#F5F3FF]",
    dotBg: "bg-[#7F22FE]",
    textColor: "text-[#7008E7]",
    ring: "shadow-[0_0_0_1px_rgba(127,34,254,0.2)_inset]",
  },
  {
    label: "Pengajuan ISBN",
    pillBg: "bg-[#FFF7ED]",
    dotBg: "bg-[#FF6900]",
    textColor: "text-[#CA3500]",
    ring: "shadow-[0_0_0_1px_rgba(245,73,0,0.25)_inset]",
  },
  {
    label: "Proses Cetak",
    pillBg: "bg-[#F0FDFA]",
    dotBg: "bg-[#009689]",
    textColor: "text-[#00786F]",
    ring: "shadow-[0_0_0_1px_rgba(0,150,137,0.2)_inset]",
  },
  {
    label: "Terbit",
    pillBg: "bg-[#F0FDF4]",
    dotBg: "bg-[#00A63E]",
    textColor: "text-[#008236]",
    ring: "shadow-[0_0_0_1px_rgba(0,166,62,0.2)_inset]",
  },
];

export default function LandingPage() {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  const scrollCarousel = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 364, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-[#F8FAFC] min-h-screen w-full font-inter text-[#0F172B]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md w-full">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 h-16">
          <a href="#top" className="flex items-center gap-2.5 rounded-lg shrink-0">
            <img
              src="/Image(1).png"
              className="w-[59px] h-10 object-contain"
              alt="Logo Langsung Terbit"
            />
            <div className="flex flex-col items-start">
              <span className="text-[#0F172B] font-inter text-[15px] font-extrabold leading-[15px] tracking-[0.06em]">
                Langsung Terbit
              </span>
              <span className="mt-1 text-[#62748E] font-inter text-[10px] font-semibold leading-[10px] tracking-[0.14em]">
                CV · Penerbit Buku
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#tentang"
              className="py-2 px-3 rounded-lg text-[#45556C] hover:text-[#1E3A5F] hover:bg-slate-100/70 transition-colors text-sm font-medium leading-5"
            >
              Tentang Kami
            </a>
            <a
              href="#cara-kerja"
              className="py-2 px-3 rounded-lg text-[#45556C] hover:text-[#1E3A5F] hover:bg-slate-100/70 transition-colors text-sm font-medium leading-5"
            >
              Cara Kerja
            </a>
            <a
              href="#paket"
              className="py-2 px-3 rounded-lg text-[#45556C] hover:text-[#1E3A5F] hover:bg-slate-100/70 transition-colors text-sm font-medium leading-5"
            >
              Paket
            </a>
            <a
              href="#kontak"
              className="py-2 px-3 rounded-lg text-[#45556C] hover:text-[#1E3A5F] hover:bg-slate-100/70 transition-colors text-sm font-medium leading-5"
            >
              Kontak
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/login"
              className="cursor-pointer whitespace-nowrap flex items-center px-3.5 h-10 rounded-lg text-[#314158] hover:bg-slate-100 transition-colors text-sm font-semibold"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="cursor-pointer whitespace-nowrap flex items-center px-4 h-10 rounded-lg bg-[#1E3A5F] hover:bg-[#172E4B] transition-colors text-white text-sm font-semibold shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              Daftar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        className="relative w-full min-h-[467px] bg-[#0F2036] overflow-hidden flex items-center"
      >
        <img
          src="/ImageTumpukanBukuDiSampingBukuCatatanDanPenaDiAtasMejaKayu.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Tumpukan buku di samping buku catatan dan pena di atas meja kayu"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,32,54,0.95)_0%,rgba(15,32,54,0.75)_50%,rgba(15,32,54,0.45)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 py-16">
          <div className="max-w-[672px]">
            <h1 className="text-[#FFB900] font-lora text-4xl sm:text-5xl font-bold leading-[1.15] tracking-[-0.025em]">
              Dari naskah hingga buku terbit, semua terpantau di satu tempat.
            </h1>
            <div className="flex flex-wrap items-center gap-3 pt-8">
              <button
                type="button"
                className="cursor-pointer whitespace-nowrap flex px-6 h-12 justify-center items-center gap-2 rounded-lg bg-[#FE9A00] hover:bg-[#e58b00] transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
              >
                <span className="text-[#0F172B] text-base font-semibold leading-6">
                  Daftar Sekarang
                </span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M4.16667 10H15.8333"
                    stroke="#0F172B"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16666L15.8333 10L10 15.8333"
                    stroke="#0F172B"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="cursor-pointer whitespace-nowrap flex px-6 h-12 justify-center items-center gap-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-colors text-white text-base font-semibold leading-6"
              >
                Masuk ke Akun
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami & Misi */}
      <section id="tentang" className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[827px]">
            <p className="text-[#BB4D00] text-sm font-semibold leading-5 tracking-[0.025em]">
              Tentang kami
            </p>
            <h2 className="mt-2 text-[#172E4B] font-lora text-3xl sm:text-4xl font-bold leading-[1.25]">
              Selamat datang di Jasa Penerbit Buku kami!
            </h2>
            <div className="mt-6 space-y-5 text-[#45556C] text-base sm:text-lg leading-[29.25px]">
              <p>
                Kami adalah mitra yang tepat untuk mewujudkan impian Anda
                menjadi seorang penulis yang diterbitkan. Dengan pengalaman
                dalam industri penerbitan dan tim yang berdedikasi, kami siap
                membantu Anda menerbitkan karya Anda dengan profesionalisme dan
                kreativitas.
              </p>
              <p>
                Kami perusahaan penerbit buku yang berdedikasi untuk
                menginspirasi dan memberdayakan penulis untuk mewujudkan impian
                mereka menjadi penulis yang diterbitkan. Sebagai mitra tepercaya
                bagi para penulis, kami berkomitmen untuk menyediakan layanan
                penerbitan yang profesional, kreatif, dan terpercaya.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {["Profesional", "Kreatif", "Terpercaya"].map((item) => (
                <div
                  key={item}
                  className="flex py-1.5 px-3 items-center gap-1.5 rounded-full bg-[#F0F4F9]"
                >
                  <CheckIcon />
                  <span className="text-[#1E3A5F] text-sm font-semibold leading-5">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Misi Card */}
          <div className="mt-12 rounded-2xl bg-[#1E3A5F] shadow-[0_12px_40px_-8px_rgba(15,23,42,0.22)] p-8 sm:p-10 relative overflow-hidden">
            <div className="rounded-full bg-[#FE9A00]/20 w-56 h-56 absolute -right-12 -top-16 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-center items-center rounded-xl bg-[#FE9A00] w-12 h-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="10" stroke="#172E4B" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="#172E4B" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" stroke="#172E4B" strokeWidth="2" />
                </svg>
              </div>
              <p className="mt-6 text-[#FFB900] text-sm font-semibold leading-5 tracking-[0.14em] uppercase">
                Misi
              </p>
              <p className="mt-3 text-white font-lora text-xl sm:text-2xl font-semibold leading-[33px] max-w-[748px]">
                Menjadi pilihan utama bagi penulis yang ingin menerbitkan karya
                mereka dengan kualitas terbaik dan mencapai kesuksesan dalam
                industri penerbitan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section
        id="cara-kerja"
        className="w-full border-t border-slate-200 bg-[#F8FAFC] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[672px]">
            <p className="text-[#BB4D00] text-sm font-semibold leading-5 tracking-[0.025em]">
              Cara kerja
            </p>
            <h2 className="mt-2 text-[#172E4B] font-lora text-3xl sm:text-4xl font-bold leading-10">
              Tiga langkah, tanpa ribet
            </h2>
            <p className="mt-3 text-[#45556C] text-base sm:text-lg leading-7">
              Tidak perlu lagi mengirim berkas lewat chat dan menunggu kabar.
              Semua tercatat rapi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Step 01 */}
            <div className="relative flex flex-col items-start p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.08)]">
              <span className="absolute right-6 top-6 text-[#F1F5F9] font-lora text-5xl font-bold leading-[48px] select-none">
                01
              </span>
              <div className="flex justify-center items-center rounded-xl bg-[#1E3A5F] w-12 h-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 8V14"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 11H16"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-[#0F172B] text-xl font-semibold leading-7">
                Daftar akun
              </h3>
              <p className="mt-2 text-[#45556C] text-base leading-[26px]">
                Buat akun penulis dengan email dan nomor kontak aktif. Hanya
                butuh satu menit.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative flex flex-col items-start p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.08)]">
              <span className="absolute right-6 top-6 text-[#F1F5F9] font-lora text-5xl font-bold leading-[48px] select-none">
                02
              </span>
              <div className="flex justify-center items-center rounded-xl bg-[#1E3A5F] w-12 h-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12V18"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 15L12 12L9 15"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-[#0F172B] text-xl font-semibold leading-7">
                Pesan &amp; unggah naskah
              </h3>
              <p className="mt-2 text-[#45556C] text-base leading-[26px]">
                Pilih paket, isi data naskah, unggah berkas (PDF/DOC/DOCX) dan
                bukti transfer.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative flex flex-col items-start p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.08)]">
              <span className="absolute right-6 top-6 text-[#F1F5F9] font-lora text-5xl font-bold leading-[48px] select-none">
                03
              </span>
              <div className="flex justify-center items-center rounded-xl bg-[#1E3A5F] w-12 h-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
                    stroke="#FFB900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-[#0F172B] text-xl font-semibold leading-7">
                Pantau status
              </h3>
              <p className="mt-2 text-[#45556C] text-base leading-[26px]">
                Lihat perkembangan naskah dari editing hingga terbit, lengkap
                dengan catatan admin.
              </p>
            </div>
          </div>

          {/* 5-Stage Pipeline */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white">
            <p className="text-[#0F172B] text-sm font-semibold leading-5">
              Lima tahap yang selalu bisa Anda pantau
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {PIPELINE_STEPS.map((step, idx) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div
                    className={`flex py-1 px-2.5 items-center gap-1.5 rounded-full ${step.pillBg} ${step.ring}`}
                  >
                    <span className={`rounded-full ${step.dotBg} w-1.5 h-1.5`} />
                    <span
                      className={`${step.textColor} text-xs font-semibold leading-4`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {idx < PIPELINE_STEPS.length - 1 && <ArrowRightSmall />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paket Penerbitan */}
      <section id="paket" className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[672px]">
            <p className="text-[#BB4D00] text-sm font-semibold leading-5 tracking-[0.025em]">
              Paket penerbitan
            </p>
            <h2 className="mt-2 text-[#172E4B] font-lora text-3xl sm:text-4xl font-bold leading-10">
              Pilih paket sesuai kebutuhan Anda
            </h2>
            <p className="mt-3 text-[#45556C] text-base sm:text-lg leading-7">
              Enam paket dengan harga transparan, semuanya sudah termasuk ISBN.
              Pembayaran cukup transfer bank dan unggah bukti.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4 mt-10">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M12.6667 5.33334L15.3333 8L12.6667 10.6667"
                  stroke="#62748E"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33333 8H14.6667"
                  stroke="#62748E"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33333 5.33334L0.666664 8L3.33333 10.6667"
                  stroke="#62748E"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#62748E] text-sm leading-5">
                Geser untuk melihat semua paket
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                aria-label="Paket sebelumnya"
                onClick={() => scrollCarousel(-1)}
                className={`cursor-pointer flex justify-center items-center rounded-full border border-slate-200 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] w-11 h-11 transition-opacity ${
                  scrollProgress <= 0.02 ? "opacity-40" : "hover:bg-slate-50"
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="#1E3A5F"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Paket berikutnya"
                onClick={() => scrollCarousel(1)}
                className={`cursor-pointer flex justify-center items-center rounded-full border border-slate-200 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] w-11 h-11 transition-opacity ${
                  scrollProgress >= 0.98 ? "opacity-40" : "hover:bg-slate-50"
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="#1E3A5F"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Carousel */}
          <div className="relative mt-5">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="no-scrollbar flex items-stretch gap-6 overflow-x-auto scroll-smooth pt-2 pb-6 pr-12 snap-x snap-mandatory"
            >
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="snap-start shrink-0 w-[320px] sm:w-[340px] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.08)] overflow-hidden relative p-6"
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 ${pkg.topBarColor}`}
                  />

                  {/* Icon + Badge */}
                  <div className="flex justify-between items-start w-full pt-1">
                    <div
                      className={`flex justify-center items-center rounded-lg ${pkg.iconBg} w-11 h-11 shrink-0`}
                    >
                      {pkg.icon}
                    </div>
                    {pkg.badge && (
                      <span
                        className={`py-1 px-2.5 rounded-full text-[11px] font-bold leading-[16.5px] ${pkg.badge.className}`}
                      >
                        {pkg.badge.text}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <p className="mt-4 text-[#62748E] text-xs font-semibold leading-4 tracking-[0.025em]">
                    {pkg.label}
                  </p>
                  <h3 className="mt-0.5 text-[#0F172B] text-xl font-semibold leading-7">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-[#45556C] text-sm leading-[22.75px] min-h-[46px]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5">
                    <p
                      className={
                        pkg.priceSubtle
                          ? "text-[#172E4B] text-[24px] font-bold leading-[36px] tracking-[-0.025em]"
                          : "text-[#172E4B] text-[28px] font-bold leading-[42px] tracking-[-0.025em]"
                      }
                    >
                      {pkg.price}
                    </p>
                    <p
                      className={`text-xs leading-4 ${
                        pkg.priceNoteGreen
                          ? "text-[#008236] font-semibold"
                          : "text-[#62748E]"
                      }`}
                    >
                      {pkg.priceNote}
                    </p>
                  </div>

                  {/* Author & HAKI pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    <div className="flex py-1 px-2 items-center gap-1 rounded-full bg-[#F1F5F9]">
                      <UsersSmallIcon />
                      <span className="text-[#314158] text-[11px] font-semibold leading-4">
                        {pkg.authorsBadge}
                      </span>
                    </div>
                    {pkg.hakiIncluded ? (
                      <div className="flex py-1 px-2 items-center gap-1 rounded-full bg-[#F0FDF4] shadow-[0_0_0_1px_rgba(0,166,62,0.2)_inset]">
                        <ShieldCheckSmallIcon />
                        <span className="text-[#008236] text-[11px] font-semibold leading-4">
                          Termasuk HAKI
                        </span>
                        {pkg.hakiNote && (
                          <span className="text-[#008236]/80 text-[11px] font-medium leading-4">
                            {pkg.hakiNote}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex py-1 px-2 items-center gap-1 rounded-full bg-[#F1F5F9] shadow-[0_0_0_1px_rgba(98,116,142,0.2)_inset]">
                        <ShieldOffSmallIcon />
                        <span className="text-[#45556C] text-[11px] font-semibold leading-4">
                          Belum termasuk HAKI
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mt-5 pt-5 border-t border-slate-200 flex-1 space-y-2.5">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <div className="pt-0.5 shrink-0">
                          <CheckIcon />
                        </div>
                        <p className="text-[#314158] text-sm leading-5">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-col gap-2 w-full">
                    <button
                      type="button"
                      className="cursor-pointer whitespace-nowrap flex px-4 justify-center items-center rounded-lg bg-[#1E3A5F] hover:bg-[#172E4B] transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] w-full h-11 text-white text-[15px] font-semibold"
                    >
                      Pilih Paket
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer whitespace-nowrap flex px-4 justify-center items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors w-full h-11 text-[#1E3A5F] text-[15px] font-semibold"
                    >
                      <EyeIcon />
                      <span>Lihat Detail Paket</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right edge fade */}
            <div className="pointer-events-none hidden md:block absolute right-0 top-0 bottom-6 w-12 bg-[linear-gradient(270deg,#FFFFFF_0%,rgba(255,255,255,0.85)_40%,rgba(255,255,255,0)_100%)]" />
          </div>

          {/* Scroll indicator bar */}
          <div className="flex justify-center pt-2">
            <div className="rounded-full bg-[#E2E8F0] w-80 h-1 overflow-hidden relative">
              <div
                className="rounded-full bg-[#1E3A5F] h-1 w-[125px] transition-transform duration-150"
                style={{
                  transform: `translateX(${scrollProgress * (320 - 125)}px)`,
                }}
              />
            </div>
          </div>

          {/* Note Paket */}
          <div className="mt-8 p-6 rounded-xl border border-blue-200 bg-[#EFF6FF] flex items-start gap-3">
            <div className="pt-0.5 shrink-0">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <circle cx="10" cy="10" r="8.33333" stroke="#155DFC" strokeWidth="1.66667" />
                <path
                  d="M10 13.3333V10"
                  stroke="#155DFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M10 6.66667H10.0083"
                  stroke="#155DFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[#162456] text-sm font-semibold leading-5">
                Note Paket
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 mt-2">
                {[
                  "Ukuran buku A5.",
                  "Minimal 70 halaman, maksimal 200 halaman.",
                  "Free buku cetak untuk maksimal 200 halaman.",
                  "Semua paket sudah include ISBN.",
                  "Paket 1, 2, dan 3 (Hemat, Standar, Komplit) belum termasuk HAKI.",
                ].map((note) => (
                  <div key={note} className="flex items-start gap-2">
                    <span className="mt-2 rounded-full bg-[#155DFC] w-1 h-1 shrink-0" />
                    <p className="text-[#1C398E] text-sm leading-5">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Ulasan Buku */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_0_rgba(15,23,42,0.04),0_4px_16px_-4px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col md:flex-row">
            <div className="relative w-full md:w-80 h-48 md:h-auto bg-[#172E4B] shrink-0">
              <img
                src="/ImageCuplikanVideoUlasanBukuLiterasiLangsungTerbit.png"
                className="opacity-90 w-full h-full object-cover"
                alt="Cuplikan video ulasan buku Literasi Langsung Terbit"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button
                  type="button"
                  aria-label="Putar video ulasan buku"
                  className="cursor-pointer flex justify-center items-center rounded-full bg-[#E7000B] hover:bg-[#c9000a] transition-colors shadow-[0_12px_40px_-8px_rgba(15,23,42,0.22)] w-14 h-14"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-0.5"
                  >
                    <path
                      d="M5 4.99998C4.9999 4.64807 5.09265 4.30237 5.26888 3.99777C5.44512 3.69318 5.69861 3.44047 6.00375 3.26518C6.30889 3.08988 6.65488 2.99821 7.00679 2.9994C7.3587 3.0006 7.70406 3.09462 8.008 3.27198L20.005 10.27C20.3078 10.4457 20.5591 10.6977 20.7339 11.001C20.9088 11.3042 21.0009 11.6481 21.0012 11.9981C21.0015 12.3482 20.91 12.6922 20.7357 12.9957C20.5614 13.2993 20.3105 13.5518 20.008 13.728L8.008 20.728C7.70406 20.9053 7.3587 20.9994 7.00679 21.0006C6.65488 21.0018 6.30889 20.9101 6.00375 20.7348C5.69861 20.5595 5.44512 20.3068 5.26888 20.0022C5.09265 19.6976 4.9999 19.3519 5 19V4.99998Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-center gap-2 flex-1">
              <p className="text-[#BB4D00] text-xs font-semibold leading-4 tracking-[0.025em]">
                Benefit di semua paket
              </p>
              <h3 className="text-[#0F172B] text-xl font-semibold leading-7">
                Video Ulasan Buku
              </h3>
              <p className="text-[#45556C] text-sm leading-[22.75px] max-w-[480px]">
                Setiap buku yang terbit mendapat video ulasan untuk promosi.
                Lihat contohnya di kanal YouTube @langsungterbit.
              </p>
              <div className="pt-1">
                <a
                  href="https://www.youtube.com/@langsungterbit"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] hover:underline text-sm font-semibold leading-5"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <circle cx="8" cy="8" r="6.66667" stroke="#1E3A5F" strokeWidth="1.33333" />
                    <path
                      d="M6.66667 5.33334L10.6667 8L6.66667 10.6667V5.33334Z"
                      stroke="#1E3A5F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Tonton Video Ulasan Buku</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-white pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="rounded-3xl bg-[#1E3A5F] px-6 py-14 sm:py-16 relative overflow-hidden flex flex-col items-center text-center">
            <div className="rounded-full bg-[#FE9A00]/20 w-72 h-72 absolute -right-12 -top-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center max-w-[680px]">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M33.3333 21.6667C33.3333 30 27.5 34.1667 20.5667 36.5834C20.2036 36.7064 19.8092 36.7005 19.45 36.5667C12.5 34.1667 6.66667 30 6.66667 21.6667V10C6.66667 9.558 6.84226 9.13408 7.15482 8.82152C7.46738 8.50896 7.89131 8.33337 8.33333 8.33337C11.6667 8.33337 15.8333 6.33337 18.7333 3.80004C19.0864 3.49837 19.5356 3.33263 20 3.33263C20.4644 3.33263 20.9136 3.49837 21.2667 3.80004C24.1833 6.35004 28.3333 8.33337 31.6667 8.33337C32.1087 8.33337 32.5326 8.50896 32.8452 8.82152C33.1577 9.13408 33.3333 9.558 33.3333 10V21.6667Z"
                  stroke="#FFB900"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 20L18.3333 23.3333L25 16.6667"
                  stroke="#FFB900"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="mt-4 text-white font-lora text-3xl sm:text-4xl font-bold leading-tight">
                Naskah Anda tidak akan tercecer lagi
              </h2>
              <p className="mt-3 text-[#E1E9F2] text-base sm:text-lg leading-7">
                Daftar gratis dan ajukan naskah pertama Anda hari ini.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
                <button
                  type="button"
                  className="cursor-pointer whitespace-nowrap px-6 h-12 rounded-lg bg-[#FE9A00] hover:bg-[#e58b00] transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] text-[#0F172B] text-base font-semibold"
                >
                  Daftar Sekarang
                </button>
                <button
                  type="button"
                  className="cursor-pointer whitespace-nowrap px-6 h-12 rounded-lg bg-transparent hover:bg-white/10 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.3)] text-white text-base font-semibold"
                >
                  Saya sudah punya akun
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="w-full border-t border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] py-14 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/Image.png"
                className="w-[59px] h-10 object-contain"
                alt="Logo Langsung Terbit"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#0F172B] text-[15px] font-extrabold leading-[15px] tracking-[0.06em]">
                  Langsung Terbit
                </span>
                <span className="mt-1 text-[#62748E] text-[10px] font-semibold leading-[10px] tracking-[0.14em]">
                  CV · Penerbit Buku
                </span>
              </div>
            </div>
            <p className="mt-4 text-[#45556C] text-sm leading-[22.75px] max-w-[320px]">
              Penerbit buku untuk akademisi, pendidik, mahasiswa, dan masyarakat
              umum — dari naskah hingga buku ber-ISBN.
            </p>
            <div className="mt-4 space-y-2.5">
              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-0.5 shrink-0"
                >
                  <path
                    d="M13.3333 6.66667C13.3333 9.99534 9.64067 13.462 8.40067 14.5327C8.28515 14.6195 8.14453 14.6665 8 14.6665C7.85547 14.6665 7.71485 14.6195 7.59933 14.5327C6.35933 13.462 2.66667 9.99534 2.66667 6.66667C2.66667 5.25218 3.22857 3.89563 4.22876 2.89543C5.22896 1.89524 6.58551 1.33334 8 1.33334C9.41449 1.33334 10.771 1.89524 11.7712 2.89543C12.7714 3.89563 13.3333 5.25218 13.3333 6.66667Z"
                    stroke="#284870"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8"
                    cy="6.66667"
                    r="2"
                    stroke="#284870"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#45556C] text-sm leading-5">
                  Jl. Kaliurang Km 7,5 No. 12, Sleman, D.I. Yogyakarta 55581
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                >
                  <rect
                    x="1.33333"
                    y="2.66667"
                    width="13.3333"
                    height="10.6667"
                    rx="1.33333"
                    stroke="#284870"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6667 4.66667L8.67267 8.48467C8.46927 8.60281 8.23823 8.66504 8.003 8.66504C7.76778 8.66504 7.53674 8.60281 7.33334 8.48467L1.33334 4.66667"
                    stroke="#284870"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:naskah@literasilangsungterbit.id"
                  className="text-[#45556C] hover:text-[#1E3A5F] text-sm leading-5"
                >
                  naskah@literasilangsungterbit.id
                </a>
              </div>
            </div>
          </div>

          {/* Hubungi Admin Column */}
          <div>
            <p className="text-[#0F172B] text-sm font-semibold leading-5">
              Hubungi Admin
            </p>
            <div className="mt-4 flex flex-col gap-2 max-w-[320px]">
              {[
                { label: "WhatsApp Admin 1", number: "0838-9236-3757", href: "https://wa.me/6283892363757" },
                { label: "WhatsApp Admin 2", number: "0838-9236-3731", href: "https://wa.me/6283892363731" },
              ].map((wa) => (
                <a
                  key={wa.label}
                  href={wa.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[48px] py-1.5 px-3 items-center gap-2.5 rounded-lg border border-emerald-200 bg-[#F0FDF4] hover:bg-emerald-100/60 transition-colors"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      d="M1.99467 10.8946C2.0927 11.1419 2.11452 11.4128 2.05734 11.6726L1.34734 13.866C1.32446 13.9772 1.33037 14.0924 1.36452 14.2007C1.39867 14.309 1.45991 14.4068 1.54245 14.4848C1.62498 14.5628 1.72608 14.6184 1.83614 14.6464C1.9462 14.6744 2.06158 14.6738 2.17134 14.6446L4.44667 13.9793C4.69181 13.9307 4.94569 13.9519 5.17934 14.0406C6.60293 14.7054 8.21558 14.8461 9.73277 14.4378C11.25 14.0295 12.5742 13.0984 13.4718 11.8089C14.3694 10.5193 14.7828 8.95423 14.6389 7.38966C14.495 5.82509 13.8031 4.3616 12.6854 3.25742C11.5676 2.15324 10.0958 1.47932 8.52959 1.35456C6.96338 1.2298 5.40343 1.66221 4.12496 2.57552C2.8465 3.48882 1.93169 4.82432 1.54193 6.34638C1.15217 7.86845 1.31252 9.47926 1.99467 10.8946Z"
                      stroke="#00A63E"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[#016630] text-sm font-semibold leading-[17.5px]">
                      {wa.label}
                    </span>
                    <span className="text-[#008236] text-xs leading-4">
                      {wa.number}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-3 text-[#45556C] text-sm leading-5 max-w-[280px]">
              Senin–Jumat, 08.00–16.00 WIB · Sabtu, 08.00–12.00 WIB
            </p>
          </div>

          {/* Social & Store Column */}
          <div>
            <p className="text-[#0F172B] text-sm font-semibold leading-5">
              Ikuti &amp; belanja buku kami
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://shopee.co.id/literasilangsungterbit"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center gap-3 rounded-lg hover:bg-slate-100 px-1 -mx-1 transition-colors"
              >
                <div className="flex justify-center items-center rounded-lg bg-[#FFEDD4] w-9 h-9 shrink-0">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M4 1.33333L2 4V13.3333C2 13.687 2.14048 14.0261 2.39052 14.2761C2.64057 14.5262 2.97971 14.6667 3.33333 14.6667H12.6667C13.0203 14.6667 13.3594 14.5262 13.6095 14.2761C13.8595 14.0261 14 13.687 14 13.3333V4L12 1.33333H4Z"
                      stroke="#CA3500"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 4H14"
                      stroke="#CA3500"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 6.66667C10.6667 7.37391 10.3857 8.05219 9.88562 8.55229C9.38552 9.05238 8.70724 9.33333 8 9.33333C7.29276 9.33333 6.61448 9.05238 6.11438 8.55229C5.61428 8.05219 5.33333 7.37391 5.33333 6.66667"
                      stroke="#CA3500"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#62748E] text-xs leading-4">Shopee</p>
                  <p className="text-[#314158] text-sm font-semibold leading-5">
                    literasilangsungterbit
                  </p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@langsungterbit"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center gap-3 rounded-lg hover:bg-slate-100 px-1 -mx-1 transition-colors"
              >
                <div className="flex justify-center items-center rounded-lg bg-[#FFE2E2] w-9 h-9 shrink-0">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <circle cx="8" cy="8" r="6.66667" stroke="#C10007" strokeWidth="1.33333" />
                    <path
                      d="M6.66667 5.33334L10.6667 8L6.66667 10.6667V5.33334Z"
                      stroke="#C10007"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#62748E] text-xs leading-4">YouTube</p>
                  <p className="text-[#314158] text-sm font-semibold leading-5">
                    @langsungterbit
                  </p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@langsungterbit"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center gap-2 rounded-lg text-[#1E3A5F] hover:underline px-1 -mx-1"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                >
                  <path
                    d="M3.33333 3.33324C3.33326 3.09864 3.39509 2.86816 3.51258 2.6651C3.63008 2.46204 3.79907 2.29357 4.0025 2.1767C4.20592 2.05984 4.43658 1.99872 4.67119 1.99952C4.90579 2.00032 5.13603 2.063 5.33866 2.18124L13.3367 6.84657C13.5385 6.96369 13.7061 7.13174 13.8226 7.33391C13.9392 7.53608 14.0006 7.7653 14.0008 7.99867C14.001 8.23203 13.94 8.46135 13.8238 8.66373C13.7076 8.8661 13.5403 9.03444 13.3387 9.15191L5.33866 13.8186C5.13603 13.9368 4.90579 13.9995 4.67119 14.0003C4.43658 14.0011 4.20592 13.94 4.0025 13.8231C3.79907 13.7062 3.63008 13.5378 3.51258 13.3347C3.39509 13.1317 3.33326 12.9012 3.33333 12.6666V3.33324Z"
                    stroke="#1E3A5F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-semibold leading-5">
                  Tonton Video Ulasan Buku
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-5 px-6 text-center">
          <p className="text-[#62748E] text-sm leading-5">
            © 2026 CV. Literasi Langsung Terbit. Hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
