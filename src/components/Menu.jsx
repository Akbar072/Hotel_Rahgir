import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { WaveDivider } from "../App";

/* ── Menu Data ── */
const menuCategories = [
  { category: "Tea Time Snacks", emoji: "☕", items: ["Sp. Tea", "Ness Coffee", "Hot Milk", "Toast Biscuit", "Papdi", "Special Khari"] },
  { category: "Cold Drinks & Lassi", emoji: "🥤", items: ["Sp. Rahgir Lassi Full", "Sp. Rahgir Lassi Half", "Lassi Sweet & Salted Full", "Lassi Sweet & Salted Half", "Lassi With Ice-Cream", "Fresh Lime Soda", "Mineral Water", "Soft Drinks"] },
  { category: "Milkshakes", emoji: "🥛", items: ["Pineapple Milkshake", "Chocolate Milkshake", "Vanilla Milkshake", "Mango Milkshake", "Kesar Pista Milkshake"] },
  { category: "Salad, Papad & Raita", emoji: "🥗", items: ["Green Salad", "Tomato Salad", "Veg. Raita", "Boondi Raita", "Pineapple Raita", "Curd", "Buttermilk", "Masala Buttermilk", "Roasted Papad", "Fried Papad", "Masala Papad"] },
  { category: "Chinese Soups", emoji: "🍜", items: ["Cream of Tomato Soup", "Hot 'n' Sour Soup", "Manchow Soup"] },
  { category: "Starters", emoji: "🍢", items: ["Paneer Chilli Dry", "Veg. Manchurian Dry", "Paneer Manchurian Dry", "Veg. Lollipop", "Veg. Hara Bhara Kabab"] },
  { category: "Chinese Main Course", emoji: "🥡", items: ["Veg. Hakka Noodle", "Chilli Garlic Noodle", "Schezwan Noodle", "Paneer Chilli Gravy", "Veg. Manchurian Gravy", "Paneer Manchurian Gravy"] },
  { category: "Chinese Rice", emoji: "🍚", items: ["Veg. Fried Rice", "Schezwan Fried Rice", "Mushroom Fried Rice"] },
  { category: "Main Course Indian Veg", emoji: "🍛", items: ["Veg. Sp. Rahgir", "Veg. Handi", "Veg. Kadai", "Veg. Hyderabadi", "Veg. Kolhapuri", "Kaju Curry", "Khoya Kaju (Sweet)", "Veg. Jaipuri", "Mushroom Masala", "Veg. Makhanwala", "Navratna Korma (Sweet)", "Green Peas Masala", "Veg. Balti", "Mix Vegetable", "Alu Mutter", "Chana Masala", "Dal Fry", "Dal Fry Butter", "Dal Tadka"] },
  { category: "Our Special Vegetable", emoji: "⭐", items: ["Veg. Bhagwan", "Veg. Hara Bageecha", "Veg. Chatpata", "Veg. Rangila", "Veg. Toofani", "Veg. Tiranga", "Veg. Khazana"] },
  { category: "Special Dishes", emoji: "👨‍🍳", items: ["Sp. Punjabi Kadhi Full", "Sp. Masala Khichdi Full"] },
  { category: "Koftas", emoji: "🧆", items: ["Kaju Kofta", "Malai Kofta", "Cheese Kofta"] },
  { category: "Main Course Indian Paneer", emoji: "🧀", items: ["Paneer Tikka Masala Full", "Paneer Tikka Masala", "Paneer Handi", "Paneer Kadai", "Paneer Bhurji", "Paneer Butter Masala", "Paneer Patiyala", "Palak Paneer", "Mutter Paneer", "Chole Paneer"] },
  { category: "Our Special Paneer", emoji: "🌟", items: ["Paneer Mumtaz", "Paneer Mushroom Masala", "Paneer Peshawari", "Paneer Laziz", "Paneer Chatpata", "Paneer Kaju Masala", "Paneer Toofani", "Paneer Lajakat", "Paneer Angara"] },
  { category: "Indian Bread", emoji: "🫓", items: ["Chapati", "Chapati Butter", "Chapati Butter Paratha", "Tandoori Plain Roti", "Tandoori Butter Roti", "Tandoori Butter Paratha", "Tandoori Butter Naan", "Butter Kulcha", "Garlic Naan"] },
  { category: "Basmati Rice & Pulao", emoji: "🍚", items: ["Sp. Rahgir Dry Fruit Pulav", "Kaju Pulav", "Veg. Pulav", "Veg. Biryani", "Hyderabadi Biryani", "Jeera Rice", "Plain Rice", "Masala Fried Rice", "Steam Rice"] },
  { category: "Ice Cream & Desserts", emoji: "🍦", items: ["Butterscotch Cone", "Chocolate Cone", "Kesar Pista Cone", "Cassata Cut", "Chocobar", "Raspberry Dolly", "Mango Dolly", "Zulu Bar", "Lonavala (Jumbo)", "Chocolate Chips (Jumbo)", "Rajbhog (Jumbo)", "Vanilla Cup", "Butterscotch Cup", "Kaju Draksh Cup", "Kesar Pista Cup"] },
];

const tabGroups = [
  { label: "All", filter: null },
  { label: "Beverages", filter: ["Tea Time Snacks", "Cold Drinks & Lassi", "Milkshakes"] },
  { label: "Starters", filter: ["Chinese Soups", "Starters", "Salad, Papad & Raita"] },
  { label: "Chinese", filter: ["Chinese Main Course", "Chinese Rice"] },
  { label: "Main Course", filter: ["Main Course Indian Veg", "Our Special Vegetable", "Special Dishes", "Koftas"] },
  { label: "Paneer", filter: ["Main Course Indian Paneer", "Our Special Paneer"] },
  { label: "Bread & Rice", filter: ["Indian Bread", "Basmati Rice & Pulao"] },
  { label: "Desserts", filter: ["Ice Cream & Desserts"] },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? menuCategories :
    menuCategories.filter((mc) => tabGroups.find((t) => t.label === activeTab)?.filter?.includes(mc.category));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }), { threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <>
      <Helmet>
        <title>Menu | Hotel Rahgir &amp; Guest House Chikhli Near Valsad</title>
        <meta name="description" content="Browse the pure vegetarian menu at Hotel Rahgir & Guest House. Indian, Chinese, starters, breads, rice, desserts and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-brand py-20 md:py-28 text-center overflow-hidden noise-overlay">
        <div className="orb w-72 h-72 bg-gold-400/5 -top-20 -right-20 animate-float" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-gold-400/60 text-xs tracking-[0.3em] uppercase font-body">100% Pure Veg</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>Our Menu</h2>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl mx-auto">Freshly prepared with love and the finest ingredients</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 md:top-[72px] z-30 bg-white/90 backdrop-blur-xl border-b border-gold-200/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1.5 py-3.5 scrollbar-hide">
            {tabGroups.map((tab) => (
              <button key={tab.label} onClick={() => setActiveTab(tab.label)}
                className={`px-5 py-2 text-sm font-medium font-body rounded-full transition-all duration-300 flex-shrink-0 ${
                  activeTab === tab.label
                    ? "bg-brand text-gold-400 shadow-lg shadow-brand/20"
                    : "text-gray-500 hover:text-brand hover:bg-gold-50 border border-transparent hover:border-gold-200/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu grid */}
      <section className="py-12 md:py-20 px-4 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m) => (
              <div key={m.category} className="reveal gradient-border glow-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="relative bg-gradient-to-r from-brand to-brand-light px-6 py-4 flex items-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 dot-pattern opacity-10" />
                  <span className="relative z-10 text-2xl">{m.emoji}</span>
                  <h3 className="relative z-10 text-gold-400 font-display font-semibold text-base leading-snug">{m.category}</h3>
                </div>
                <ul className="p-6 space-y-2 max-h-[350px] overflow-y-auto">
                  {m.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-body group py-0.5">
                      <span className="w-1.5 h-1.5 bg-gold-400/40 rounded-full flex-shrink-0 group-hover:bg-gold-400 group-hover:shadow-[0_0_8px_rgba(212,168,67,0.3)] transition-all duration-300" />
                      <span className="group-hover:text-gold-600 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
