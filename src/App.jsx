import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Rules from "./components/Rules";
import Services from "./components/Services";
// import Tariff from "./components/Tariff";
import "./index.css"; // Tailwind CSS

const HeaderIcon = ({ children, href }) => (
  <span className="flex items-center text-sm">
    {children}
    <a href={href} className="hover:underline ml-1">
      {href.includes("tel:") ? href.replace("tel:", "") : href.replace("mailto:", "")}
    </a>
  </span>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Rules", to: "/rules" },
  // { name: "Tariff", to: "/tariff" },
  { name: "Gallery", to: "/gallery" },
  { name: "Menu", to: "/menu" },
  { name: "Contact", to: "/contact" },
];

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-2 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-2">
            <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-6">
              <HeaderIcon href="tel:+919909432530">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.959.839l1.306 3.107a1 1 0 00-.263 1.026l-1.554 1.554a9 9 0 006.113 6.113l1.554-1.554a1 1 0 001.026-.263l3.107 1.306a1 1 0 00.839.959H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
                </svg>
              </HeaderIcon>
              <HeaderIcon href="mailto:rahgir2011@gmail.com">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </HeaderIcon>
            </div>

            <img
              src="/logo-rahgir.png"
              alt="Hotel Rahgir Logo"
              className="max-h-[80px] w-auto p-2 rounded-2xl border-2 border-orange-500 bg-white shadow-md transition duration-300 hover:scale-105"
            />
          </div>

          <h2
            className="text-4xl md:text-5xl text-center tracking-widest uppercase drop-shadow-lg mb-6
             bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600
             bg-clip-text text-transparent"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            HOTEL RAHGIR & GUEST HOUSE
          </h2>

          <nav className="bg-gray-700 rounded-md py-2">
            <ul className="flex flex-wrap justify-center gap-4 text-base md:text-lg font-medium">
              {navLinks.map(({ name, to }) => {
                const isActive = pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`px-3 py-1 transition-colors ${isActive
                          ? "text-orange-400"
                          : "text-white hover:text-orange-400"
                        }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4 bg-white p-6 rounded-lg shadow-md">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-semibold text-lg mb-1">Hotel Rahgir & Guest House</p>
              <p>National Highway No.48, Vaghadhara, Valsad, Gujarat, 396375</p>
              <p>Valsad, Gujarat, India</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Contact Us</p>
              <HeaderIcon href="tel:+919909432530">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.959.839l1.306 3.107a1 1 0 00-.263 1.026l-1.554 1.554a9 9 0 006.113 6.113l1.554-1.554a1 1 0 001.026-.263l3.107 1.306a1 1 0 00.839.959H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
                </svg>
              </HeaderIcon>
              <HeaderIcon href="mailto:rahgir2011@gmail.com">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </HeaderIcon>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rules" element={<Rules />} />
          {/* <Route path="/tariff" element={<Tariff />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
