import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Ban, Trash2, Briefcase, PawPrint, Baby, Gamepad2, UtensilsCrossed, CreditCard, Clock, Hammer, IdCard, DoorClosed, Moon } from "lucide-react";
import { WaveDivider } from "../App";

const ruleSections = [
  {
    title: "Restaurant & Garden Game Area Rules",
    rules: [
      { icon: <Ban size={20} />, title: "No Smoking or Alcohol", desc: "Smoking and alcohol consumption are strictly prohibited within hotel, restaurant, and garden areas." },
      { icon: <Trash2 size={20} />, title: "Cleanliness", desc: "Kindly use dustbins provided to maintain cleanliness and hygiene." },
      { icon: <Briefcase size={20} />, title: "Responsibility for Belongings", desc: "Management is not responsible for lost or unattended personal belongings." },
      { icon: <PawPrint size={20} />, title: "No Pets Allowed", desc: "Pets are not allowed inside the hotel or restaurant premises." },
      { icon: <Baby size={20} />, title: "Supervision of Children", desc: "Children must be accompanied by adults for safety reasons." },
      { icon: <Gamepad2 size={20} />, title: "Age-Specific Games", desc: "Certain garden games are meant only for children below 12 years of age." },
      { icon: <UtensilsCrossed size={20} />, title: "No Outside Food", desc: "Outside food and beverages are strictly prohibited inside restaurant premises." },
    ],
  },
  {
    title: "Room Usage Rules",
    rules: [
      { icon: <CreditCard size={20} />, title: "Settlement of Bills", desc: "All bills must be settled on presentation. Personal cheques are not accepted." },
      { icon: <Clock size={20} />, title: "Check-Out Time", desc: "Standard check-out time is 12 noon. Late check-out depends on room availability." },
      { icon: <Hammer size={20} />, title: "Damage to Property", desc: "Guests will be charged for any damage to hotel property." },
      { icon: <IdCard size={20} />, title: "Valid Identification", desc: "Valid government-issued photo ID is mandatory at the time of check-in." },
      { icon: <DoorClosed size={20} />, title: "Right to Refuse Stay", desc: "Management reserves the right to refuse or cancel stay in case of rule violations." },
      { icon: <Moon size={20} />, title: "Quiet Hours", desc: "Please maintain silence between 10:00 PM and 8:00 AM for guest comfort." },
    ],
  },
];

const AccordionSection = ({ section, isOpen, onToggle }) => (
  <div className="gradient-border glow-card bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg">
    <button onClick={onToggle} className="w-full flex items-center justify-between px-7 py-6 text-left group" aria-expanded={isOpen}>
      <h3 className="font-display font-semibold text-brand text-lg md:text-xl">{section.title}</h3>
      <div className={`w-8 h-8 rounded-lg bg-gold-50 border border-gold-200/60 flex items-center justify-center text-gold-500 transition-all duration-500 group-hover:bg-brand group-hover:text-gold-400 group-hover:border-brand ${isOpen ? "rotate-180" : ""}`}>
        <ChevronDown size={16} />
      </div>
    </button>
    <div className={`accordion-content ${isOpen ? "open" : ""}`}>
      <div className="px-7 pb-7 space-y-3.5">
        {section.rules.map((rule, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-cream/60 border border-gold-100/30 hover:bg-cream hover:border-gold-200/50 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-white border border-gold-200/40 flex items-center justify-center text-gold-500 flex-shrink-0 shadow-sm group-hover:shadow-[0_4px_16px_rgba(212,168,67,0.1)] transition-all duration-300">
              {rule.icon}
            </div>
            <div>
              <h4 className="font-body font-semibold text-brand text-sm md:text-base mb-0.5">{rule.title}</h4>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Rules = () => {
  const [openSections, setOpenSections] = useState([0, 1]);
  const toggleSection = (i) => setOpenSections((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hotel Rules &amp; Policies | Hotel Rahgir &amp; Guest House Chikhli Near Valsad</title>
        <meta name="description" content="Read hotel rules, policies, check-in and check-out guidelines of Hotel Rahgir & Guest House in Chikhli near Valsad." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-brand py-20 md:py-28 text-center overflow-hidden noise-overlay">
        <div className="orb w-72 h-72 bg-gold-400/5 -top-20 -right-20 animate-float" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-gold-400/60 text-xs tracking-[0.3em] uppercase font-body">Please Note</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>Rules &amp; Policies</h2>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl mx-auto">
            We appreciate your cooperation in maintaining a comfortable environment for all guests
          </p>
        </div>
      </section>

      <WaveDivider color="#FDF6E8" />
      <section className="py-16 md:py-24 px-4 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto max-w-4xl space-y-5 relative z-10">
          {ruleSections.map((section, index) => (
            <div key={index} className="reveal">
              <AccordionSection section={section} isOpen={openSections.includes(index)} onToggle={() => toggleSection(index)} />
            </div>
          ))}

          <div className="reveal text-center mt-10 p-7 gradient-border glow-card bg-white rounded-2xl">
            <p className="text-gray-500 text-sm font-body">
              By staying at Hotel Rahgir &amp; Guest House, you agree to the above terms and conditions. For any queries, please contact the front desk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules;
