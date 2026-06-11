import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  AlarmClock, BedDouble, Coffee, Hotel, ParkingCircle,
  ShieldCheck, ShowerHead, Smile, Gamepad2, UtensilsCrossed,
  Wifi, Sparkles,
} from "lucide-react";
import { WaveDivider } from "../App";

const services = [
  { icon: <Hotel size={30} />, title: "Multi-Cuisine Vegetarian Restaurant", desc: "Enjoy our wide selection of delicious pure vegetarian dishes, from traditional Indian to Chinese cuisine." },
  { icon: <Coffee size={30} />, title: "Tea & Coffee Anytime", desc: "Freshly brewed tea and coffee available round the clock for our guests." },
  { icon: <ShieldCheck size={30} />, title: "Clean & Hygienic Environment", desc: "We maintain the highest standards of cleanliness throughout our premises." },
  { icon: <ParkingCircle size={30} />, title: "Ample Parking Facility", desc: "Spacious and secure parking area for cars, buses, and all types of vehicles." },
  { icon: <Smile size={30} />, title: "Friendly & Professional Staff", desc: "Our warm and trained staff ensures a pleasant and memorable stay for every guest." },
  { icon: <AlarmClock size={30} />, title: "24-Hour Room Service", desc: "Round-the-clock service to cater to all your needs at any time of day or night." },
  { icon: <BedDouble size={30} />, title: "Comfortable & Well-Furnished Rooms", desc: "Clean, spacious rooms with modern amenities for a relaxing and restful stay." },
  { icon: <ShowerHead size={30} />, title: "24-Hour Hot & Cold Water", desc: "Uninterrupted hot and cold water supply available in all rooms at all times." },
  { icon: <Gamepad2 size={30} />, title: "Garden & Games Area", desc: "Beautiful garden with recreational games — perfect for families and children." },
  { icon: <UtensilsCrossed size={30} />, title: "Banquet & Event Hall", desc: "Spacious banquet hall available for family functions, events, and celebrations." },
  { icon: <Sparkles size={30} />, title: "Tyre Repair & Pan Parlour", desc: "Convenient roadside services available for highway travelers on NH-48." },
  { icon: <Wifi size={30} />, title: "Peaceful Location", desc: "Enjoy a tranquil atmosphere away from city noise, on the scenic National Highway." },
];

const Services = () => {
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
        <title>Hotel Services | Hotel Rahgir &amp; Guest House Chikhli Near Valsad</title>
        <meta name="description" content="Discover hotel services at Hotel Rahgir & Guest House in Chikhli near Valsad including comfortable rooms, restaurant, parking, 24-hour service, hygienic environment and warm hospitality." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-brand py-20 md:py-28 text-center overflow-hidden noise-overlay">
        <div className="orb w-72 h-72 bg-gold-400/5 -top-20 -right-20 animate-float" />
        <div className="orb w-56 h-56 bg-gold-400/4 bottom-0 -left-20 animate-float-delayed" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-gold-400/60 text-xs tracking-[0.3em] uppercase font-body">What We Offer</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Our Services
          </h2>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl mx-auto">
            Everything you need for a comfortable stay and delightful dining experience
          </p>
        </div>
      </section>

      {/* Grid */}
      <WaveDivider color="#FDF6E8" />
      <section className="py-16 md:py-24 px-4 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} card-hover gradient-border glow-card bg-white rounded-2xl p-7 group`}>
                <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center text-gold-400 mb-5 shadow-lg shadow-brand/20 group-hover:shadow-[0_8px_24px_rgba(212,168,67,0.15)] group-hover:scale-105 transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-brand text-lg mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
