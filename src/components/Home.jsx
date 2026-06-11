import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Star,
  Phone,
  Clock,
  Leaf,
  BedDouble,
  ParkingCircle,
  ArrowRight,
  ChevronDown,
  Utensils,
  Quote,
  MapPin,
  Hospital,
  Train,
  Bus,
  Send,
  CheckCircle,
} from "lucide-react";

import "swiper/css/pagination";

import { heroImages } from "../data/GalleryImages";
import SectionTitle from "./SectionTitle";
import { WaveDivider } from "../App";

/* ── WhatsApp SVG ── */
const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Animated Counter Hook ── */
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return [count, ref];
};

/* ── Stat Item ── */
const StatItem = ({ icon, value, suffix = "", label }) => {
  const isNum = typeof value === "number";
  const [count, ref] = useCounter(isNum ? value : 0);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-gold-400/15 flex items-center justify-center text-gold-400 group-hover:bg-gold-400/10 group-hover:border-gold-400/30 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.15)] transition-all duration-500">
        {icon}
      </div>
      <span className="text-white text-3xl md:text-4xl font-bold font-display">
        {isNum ? count : value}
        <span className="text-gold-400">{suffix}</span>
      </span>
      <span className="text-gray-500 text-xs font-body tracking-widest uppercase">{label}</span>
    </div>
  );
};

/* ── Data ── */
const stats = [
  { icon: <Star size={24} />, value: "★ 4.0", label: "Google Rated" },
  { icon: <Clock size={24} />, value: "24/7", label: "Room Service" },
  { icon: <Leaf size={24} />, value: "100%", label: "Pure Vegetarian" },
  { icon: <BedDouble size={24} />, value: "Comfort", label: "Clean Rooms" },
];

const servicesPreview = [
  { icon: <Utensils size={28} />, title: "Pure Veg Restaurant", desc: "Multi-cuisine vegetarian dining experience" },
  { icon: <BedDouble size={28} />, title: "Comfortable Rooms", desc: "Well-furnished rooms with modern amenities" },
  { icon: <ParkingCircle size={28} />, title: "Ample Parking", desc: "Spacious parking for all vehicle types" },
  { icon: <Clock size={28} />, title: "24/7 Service", desc: "Round-the-clock room service & support" },
];

const testimonials = [
  {
    name: "Satisfied Guest",
    text: "I recently dined at Rahgir Hotel, and it was an unforgettable experience! The food was hands down the best I've ever eaten—bursting with flavor, fresh ingredients, and perfectly cooked dishes that left me craving more. The service was top-notch too; the staff was incredibly friendly and attentive.",
    food: 5, service: 5, atmosphere: 5,
  },
  {
    name: "Harit Adepal",
    badge: "Local Guide",
    text: "Rahgir Hotel is an excellent place to eat. The food quality is consistently good, fresh, and well-prepared, with great taste. The atmosphere is the real highlight—calm, clean, and comfortable, making it perfect for families and friends.",
    food: 5, service: 5, atmosphere: 5,
    recommended: ["Paneer Chilli", "Chapati", "Paneer Kadai", "Khichdi"],
  },
  {
    name: "Shivam Singh",
    text: "The quality of food served is absolutely delicious, ambience is serene and very cheerful staff in serving... all in one wonderful place!",
    food: 5, service: 5, atmosphere: 5,
  },
];
/* ═══════════════════════════════════════
   QUICK ENQUIRY FORM
   ═══════════════════════════════════════ */
const QuickEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => { setSubmitted(true); form.reset(); })
      .catch(() => alert("Something went wrong. Please try calling us directly."));
  };

  if (submitted) {
    return (
      <div className="reveal text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h4 className="font-display font-bold text-white text-xl mb-2">Thank You!</h4>
        <p className="text-gray-400 font-body mb-6">We&rsquo;ve received your message and will get back to you soon.</p>
        <button onClick={() => setSubmitted(false)} className="text-gold-400 hover:text-gold-300 font-medium font-body text-sm underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      name="quick-enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="reveal mt-10 glass-card rounded-2xl p-8 space-y-5"
    >
      <input type="hidden" name="form-name" value="quick-enquiry" />
      <p className="hidden"><label>Don&rsquo;t fill: <input name="bot-field" /></label></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quick-name" className="block text-sm font-medium text-gray-300 font-body mb-1.5">Your Name *</label>
          <input type="text" id="quick-name" name="name" required placeholder="Enter your name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-gray-600 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all" />
        </div>
        <div>
          <label htmlFor="quick-phone" className="block text-sm font-medium text-gray-300 font-body mb-1.5">Phone Number *</label>
          <input type="tel" id="quick-phone" name="phone" required placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-gray-600 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all" />
        </div>
      </div>

      <div>
        <label htmlFor="quick-message" className="block text-sm font-medium text-gray-300 font-body mb-1.5">Message *</label>
        <textarea id="quick-message" name="message" required rows={3} placeholder="I'd like to enquire about..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-gray-600 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/10 outline-none transition-all resize-none" />
      </div>

      <button type="submit" id="quick-enquiry-submit"
        className="btn-shimmer w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-brand font-bold rounded-full transition-all duration-500 shadow-[0_8px_32px_rgba(212,168,67,0.2)] hover:shadow-[0_12px_48px_rgba(212,168,67,0.35)] flex items-center justify-center gap-2 font-body text-sm tracking-wider uppercase mx-auto sm:mx-0">
        <Send size={16} /> Send Enquiry
      </button>
    </form>
  );
};

/* ═══════════════════════════════════════
   HOME COMPONENT
   ═══════════════════════════════════════ */
const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hotel Rahgir &amp; Guest House | Best Hotel in Chikhli Near Valsad</title>
        <meta name="description" content="Hotel Rahgir & Guest House in Chikhli near Valsad offers comfortable rooms, clean stay, delicious vegetarian food, and excellent hospitality for families and business travelers." />
      </Helmet>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* BG slider */}
        <div className="absolute inset-0 z-0">
          <Swiper modules={[Autoplay, Navigation, Pagination]} navigation pagination={{ clickable: true }}
            loop autoplay={{ delay: 5000, disableOnInteraction: false }} speed={1400}
            className="w-full h-full hero-swiper">
            {heroImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Hotel Rahgir view ${i + 1}`} className="w-full h-full object-cover scale-105"
                  loading={i === 0 ? "eager" : "lazy"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gradient overlays — heavy on mobile for clean look, lighter on desktop to show images */}
        <div className="absolute inset-0 bg-brand/95 md:bg-gradient-to-b md:from-brand/90 md:via-brand/70 md:to-brand z-[5] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/50 via-transparent to-brand/50 z-[5] pointer-events-none hidden md:block" />

        {/* Decorative orbs */}
        <div className="orb w-96 h-96 bg-gold-400/8 top-1/4 -right-48 animate-float z-[5]" />
        <div className="orb w-72 h-72 bg-gold-400/5 bottom-1/4 -left-36 animate-float-delayed z-[5]" />
        <div className="orb w-40 h-40 bg-gold-400/6 top-20 left-1/4 animate-float-slow z-[5]" />

        {/* Dot pattern */}
        <div className="absolute inset-0 z-[5] dot-pattern opacity-30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-[15] text-center text-white px-4 max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="text-gold-300 tracking-[0.4em] uppercase text-[11px] font-body font-medium">Welcome to</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 opacity-0 animate-slide-up leading-[1.1]"
            style={{ animationDelay: "0.4s", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>
            Hotel Rahgir
          </h2>
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-gradient-gold mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}>
            &amp; Guest House
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {["Pure Vegetarian", "Chikhli, Valsad", "24/7 Hospitality"].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-xs font-body tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <a href="tel:+919909432530" id="hero-book-now"
              className="btn-shimmer px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-brand font-bold rounded-full transition-all duration-500 shadow-[0_8px_32px_rgba(212,168,67,0.3)] hover:shadow-[0_12px_48px_rgba(212,168,67,0.45)] font-body text-sm tracking-wider uppercase">
              Book Your Stay
            </a>
            <Link to="/menu" id="hero-explore-menu"
              className="px-10 py-4 border border-white/15 hover:border-gold-400/50 text-white hover:text-gold-300 rounded-full transition-all duration-500 backdrop-blur-sm bg-white/5 hover:bg-white/10 font-body text-sm tracking-wider uppercase">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator — clickable */}
        <button
          onClick={() => document.getElementById('stats-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[15] flex flex-col items-center gap-2 opacity-0 animate-fade-in cursor-pointer bg-transparent border-none"
          style={{ animationDelay: "1.4s" }}
          aria-label="Scroll down"
        >
          <span className="text-[10px] text-gray-500 font-body tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-gold-400/50 animate-bounce-slow" />
        </button>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section id="stats-section" className="relative bg-brand py-12 md:py-16 overflow-hidden noise-overlay">
        {/* Decorative gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </section>

      {/* ═══════════ WELCOME ═══════════ */}
      <section className="relative py-24 md:py-32 px-4 bg-cream overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/3 rounded-full blur-[80px]" />

        <div className="container mx-auto max-w-3xl text-center relative z-10 reveal">
          <SectionTitle subtitle="Experience warmth, comfort, and the finest vegetarian cuisine">
            A Tradition of Hospitality
          </SectionTitle>

          <p className="text-gray-600 text-base md:text-lg leading-[1.9] mt-8 font-body">
            At <strong className="text-gold-600">Hotel Rahgir &amp; Guest House</strong>, we offer a peaceful
            and comfortable stay in <strong className="text-gold-600">Chikhli</strong>, conveniently located
            on NH-48 near Valsad. Known for our cleanliness, warm hospitality, and delicious pure vegetarian
            food, we make every guest feel at home.
          </p>
          <p className="text-gray-500 text-sm md:text-base leading-[1.9] mt-5 font-body">
            Whether you&rsquo;re visiting for business, family functions, or leisure travel, we provide
            comfortable rooms, friendly service, and a relaxing environment to make your stay memorable.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-400/30" />
            <Leaf size={16} className="text-gold-400/40" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-400/30" />
          </div>
        </div>
      </section>

      {/* ═══════════ GOOGLE REVIEW BADGE ═══════════ */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto reveal">
          <a
            href="https://maps.app.goo.gl/6rj7CAJg394LrkWEA"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border glow-card card-hover flex flex-col sm:flex-row items-center justify-between gap-6 bg-cream rounded-2xl p-8 md:p-10 max-w-3xl mx-auto group"
          >
            <div className="flex items-center gap-5">
              {/* Google "G" icon */}
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 border border-gold-200/40">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="star-rating text-lg">★★★★</span>
                  <span className="text-brand font-display font-bold text-2xl">4.0</span>
                </div>
                <p className="text-gray-500 text-sm font-body">Rated on Google Maps</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold-600 font-medium font-body text-sm group-hover:text-gold-700 transition-colors">
              See All Reviews
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </section>

      {/* ═══════════ SERVICES PREVIEW ═══════════ */}
      <WaveDivider color="#ffffff" />
      <section className="py-20 md:py-24 bg-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="container mx-auto relative z-10">
          <div className="reveal">
            <SectionTitle subtitle="Everything you need for a perfect stay">Our Services</SectionTitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {servicesPreview.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card-hover gradient-border glow-card bg-cream/80 rounded-2xl p-8 text-center`}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand flex items-center justify-center text-gold-400 shadow-lg shadow-brand/30 transition-all duration-500 group-hover:shadow-gold-400/20">
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-brand mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/30 text-gold-600 hover:bg-gold-400 hover:text-brand hover:border-gold-400 font-medium transition-all duration-400 font-body text-sm group">
              View All Services
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <WaveDivider color="#0c0c1d" />
      <section className="relative bg-brand py-24 md:py-28 px-4 overflow-hidden noise-overlay">
        {/* Orbs */}
        <div className="orb w-80 h-80 bg-gold-400/5 top-0 right-0 animate-float" />
        <div className="orb w-60 h-60 bg-gold-400/3 bottom-10 left-10 animate-float-delayed" />

        <div className="container mx-auto relative z-10">
          <div className="reveal">
            <SectionTitle light subtitle="What our guests say about their experience">
              Guest Reviews
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} rounded-2xl p-7 glass-card hover:bg-white/8 transition-all duration-500 group relative`}>
                {/* Big decorative quote */}
                <Quote size={32} className="absolute top-5 right-5 text-gold-400/10 group-hover:text-gold-400/20 transition-colors duration-500" />

                <div className="star-rating text-base mb-5">★★★★★</div>

                <p className="text-gray-300 text-sm leading-[1.85] mb-6 font-body line-clamp-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 flex items-center justify-center text-gold-400 font-bold font-display text-lg border border-gold-400/10">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium font-body">{t.name}</p>
                    {t.badge && <p className="text-gold-400/70 text-xs font-body">{t.badge}</p>}
                  </div>
                </div>

                {t.recommended && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.recommended.map((dish, j) => (
                      <span key={j} className="text-[11px] bg-gold-400/8 text-gold-400/80 px-2.5 py-1 rounded-full font-body border border-gold-400/10">
                        {dish}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <a href="https://maps.app.goo.gl/6rj7CAJg394LrkWEA" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400/40 font-medium transition-all duration-400 font-body text-sm group">
              See All Reviews on Google
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ NEARBY ATTRACTIONS ═══════════ */}
      <section className="py-20 md:py-24 px-4 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="reveal">
            <SectionTitle subtitle="Conveniently located for travelers and visitors">
              Location Advantages
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { icon: <Hospital size={28} />, title: "Hospital Nearby", desc: "Hospital located right in front of hotel — ideal for patient families", highlight: "Walking Distance" },
              { icon: <MapPin size={28} />, title: "On NH-48 Highway", desc: "Directly on National Highway 48 with easy access and ample truck/bus parking", highlight: "Direct Access" },
              { icon: <Train size={28} />, title: "Valsad Railway Station", desc: "Well-connected railway station with express and local trains", highlight: "~15 km" },
              { icon: <Bus size={28} />, title: "Chikhli Bus Stand", desc: "Regular ST buses connecting to Valsad, Navsari, Surat, and Mumbai", highlight: "~8 km" },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card-hover gradient-border glow-card bg-white rounded-2xl p-7`}>
                <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center text-gold-400 mb-5 shadow-lg shadow-brand/20">
                  {item.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-gold-400/10 text-gold-600 text-xs font-body font-semibold rounded-full mb-3 border border-gold-400/20">
                  {item.highlight}
                </span>
                <h3 className="font-display font-semibold text-brand text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Google Map link */}
          <div className="text-center mt-10 reveal">
            <a href="https://maps.app.goo.gl/6rj7CAJg394LrkWEA" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/30 text-gold-600 hover:bg-gold-400 hover:text-brand hover:border-gold-400 font-medium transition-all duration-400 font-body text-sm group">
              <MapPin size={15} /> View on Google Maps
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK ENQUIRY ═══════════ */}
      <WaveDivider color="#0c0c1d" />
      <section className="relative bg-brand py-20 md:py-24 px-4 overflow-hidden noise-overlay">
        <div className="orb w-80 h-80 bg-gold-400/5 -top-20 -right-20 animate-float" />
        <div className="orb w-60 h-60 bg-gold-400/3 bottom-0 -left-20 animate-float-delayed" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="reveal">
            <SectionTitle light subtitle="Have a question? Drop us a quick message">
              Quick Enquiry
            </SectionTitle>
          </div>

          <QuickEnquiryForm />
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-20 md:py-24 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-300% animate-gradient-shift" />
        <div className="absolute inset-0 dot-pattern opacity-10" />

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-[60px]" />

        <div className="container mx-auto text-center relative z-10 reveal">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand mb-5">
            Ready to Experience Comfort?
          </h2>
          <p className="text-brand/50 text-base md:text-lg mb-10 max-w-xl mx-auto font-body">
            Book your stay and enjoy the best of vegetarian cuisine, comfortable rooms, and warm hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919909432530" id="cta-call"
              className="btn-shimmer px-10 py-4 bg-brand hover:bg-brand-light text-gold-400 font-bold rounded-full transition-all duration-500 shadow-[0_8px_32px_rgba(12,12,29,0.3)] hover:shadow-[0_12px_48px_rgba(12,12,29,0.4)] flex items-center gap-2.5 font-body text-sm tracking-wider uppercase">
              <Phone size={18} /> Call to Book
            </a>
            <a href="https://wa.me/919909432194?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Rahgir." target="_blank" rel="noopener noreferrer" id="cta-whatsapp"
              className="btn-shimmer px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-full transition-all duration-500 shadow-[0_8px_32px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.35)] flex items-center gap-2.5 font-body text-sm tracking-wider uppercase">
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
