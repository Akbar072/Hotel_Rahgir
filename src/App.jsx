import { useState, useEffect } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Menu as MenuIcon, X, Phone, Mail, MapPin } from "lucide-react";

import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import MenuPage from "./components/Menu";
import Rules from "./components/Rules";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Menu", to: "/menu" },
  { name: "Gallery", to: "/gallery" },
  { name: "Rules", to: "/rules" },
  { name: "Contact", to: "/contact" },
];

/* WhatsApp icon (shared) */
const WhatsAppSmall = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ═══════════════════════════════════════
   WAVE DIVIDER
   ═══════════════════════════════════════ */
export const WaveDivider = ({ color = "#0c0c1d", flip = false, className = "" }) => (
  <div className={`wave-divider ${flip ? "rotate-180" : ""} ${className}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path
        fill={color}
        d="M0,60 C240,100 480,20 720,50 C960,80 1200,10 1440,40 L1440,100 L0,100 Z"
      />
    </svg>
  </div>
);

/* ═══════════════════════════════════════
   HEADER
   ═══════════════════════════════════════ */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="hidden md:block bg-brand py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <a href="tel:+919909432530" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300">
              <Phone size={11} /> +91 99094 32530
            </a>
            <a href="mailto:rahgir2011@gmail.com" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300">
              <Mail size={11} /> rahgir2011@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={11} />
            <span>NH-48, Chikhli, Valsad, Gujarat</span>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header className={`sticky top-0 z-40 transition-all duration-700 ${
        solid
          ? "bg-brand/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gold-400/10"
          : "bg-brand/85 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5"
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo-rahgir.png"
                  alt="Hotel Rahgir Logo"
                  className="h-11 md:h-[52px] w-auto rounded-xl border border-gold-400/20 bg-white/95 p-1 shadow-lg shadow-gold-400/5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-gold-400/15 group-hover:border-gold-400/40"
                />
                {/* subtle glow behind logo */}
                <div className="absolute inset-0 rounded-xl bg-gold-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-display font-bold text-gradient-gold leading-tight">
                  Hotel Rahgir
                </h1>
                <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] uppercase font-body">
                  &amp; Guest House
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ name, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link px-4 py-2 text-[13px] font-medium font-body tracking-widest uppercase transition-colors duration-300 ${
                    pathname === to ? "text-gold-400 active" : "text-gray-400 hover:text-gold-300"
                  }`}
                >
                  {name}
                </Link>
              ))}
              <a
                href="tel:+919909432530"
                className="btn-shimmer ml-5 px-6 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-brand font-bold text-xs font-body rounded-full transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 tracking-wider uppercase"
              >
                Book Now
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-gold-400 transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <>
          <div className="mobile-menu-overlay animate-fade-in" onClick={() => setMobileOpen(false)} />
          <div className="mobile-menu-drawer animate-slide-in-right">
            <div className="flex justify-between items-center mb-10">
              <span className="text-gradient-gold font-display font-bold text-2xl">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-white transition-colors" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ name, to }) => (
                <Link key={to} to={to}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium font-body transition-all duration-300 ${
                    pathname === to ? "bg-gold-400/10 text-gold-400 border border-gold-400/20" : "text-gray-400 hover:bg-white/5 hover:text-gold-300"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-6 border-t border-white/5 space-y-4 font-body">
              <a href="tel:+919909432530" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                <Phone size={16} /> +91 99094 32530
              </a>
              <a href="https://wa.me/919909432194" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <WhatsAppSmall size={16} /> +91 99094 32194
              </a>
              <a href="mailto:rahgir2011@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                <Mail size={16} /> rahgir2011@gmail.com
              </a>
            </div>
            <a href="tel:+919909432530" className="btn-shimmer mt-8 block text-center px-5 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-brand font-bold font-body rounded-full shadow-lg shadow-gold-400/20">
              Book Now
            </a>
          </div>
        </>
      )}
    </>
  );
};

/* ═══════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════ */
const Footer = () => (
  <footer className="relative bg-brand text-gray-400 font-body overflow-hidden">
    {/* Decorative orbs */}
    <div className="orb w-64 h-64 bg-gold-400/5 -top-32 -right-32 animate-float" />
    <div className="orb w-48 h-48 bg-gold-400/3 bottom-20 -left-24 animate-float-delayed" />

    {/* Top wave */}
    <WaveDivider color="#0c0c1d" flip className="relative z-10 -mt-px" />

    <div className="relative z-10 container mx-auto px-6 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-5">
            <img src="/logo-rahgir.png" alt="Hotel Rahgir" className="h-16 w-auto rounded-xl border border-gold-400/15 bg-white/95 p-1.5 shadow-lg shadow-gold-400/5" />
          </Link>
          <h3 className="text-gradient-gold font-display font-bold text-xl mb-3">
            Hotel Rahgir &amp; Guest House
          </h3>
          <p className="text-sm leading-relaxed text-gray-500">
            A peaceful retreat offering pure vegetarian food, clean rooms, and warm hospitality on NH-48, Chikhli near Valsad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 font-body">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link to={to} className="text-gray-500 hover:text-gold-400 transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400/30 group-hover:bg-gold-400 group-hover:shadow-[0_0_8px_rgba(212,168,67,0.4)] transition-all duration-300" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 font-body">Contact Us</h4>
          <div className="space-y-3.5 text-sm">
            <a href="tel:+919909432530" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors duration-300">
              <Phone size={14} className="text-gold-400/50" /> +91 99094 32530
            </a>
            <a href="https://wa.me/919909432194" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-green-400 transition-colors duration-300">
              <WhatsAppSmall size={14} className="text-green-400/50" /> +91 99094 32194
            </a>
            <a href="mailto:rahgir2011@gmail.com" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors duration-300">
              <Mail size={14} className="text-gold-400/50" /> rahgir2011@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 font-body">Find Us</h4>
          <div className="flex items-start gap-2.5 text-sm mb-5">
            <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-400/50" />
            <p className="text-gray-500">National Highway No.48, Vaghadhara, Chikhli – Valsad Road, Gujarat 396375</p>
          </div>
          <a href="https://maps.app.goo.gl/6rj7CAJg394LrkWEA" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-all duration-300 group">
            <MapPin size={13} className="group-hover:animate-bounce-slow" /> Get Directions
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Hotel Rahgir &amp; Guest House. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Pure Vegetarian • Chikhli, Valsad
        </p>
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════
   LAYOUT + APP
   ═══════════════════════════════════════ */
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col font-body bg-brand">
    <Header />
    <main className="flex-grow bg-cream">{children}</main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
