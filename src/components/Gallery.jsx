import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import galleryImages from "../data/GalleryImages";
import { WaveDivider } from "../App";

/* ── Lightbox ── */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") onPrev(); if (e.key === "ArrowRight") onNext(); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay animate-fade-in" onClick={onClose}>
      <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all z-10 backdrop-blur-sm" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
      <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all z-10 backdrop-blur-sm border border-white/10" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <img src={images[index]} alt={`Hotel Rahgir gallery ${index + 1}`} className="lightbox-image animate-scale-in" onClick={(e) => e.stopPropagation()} />
      <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all z-10 backdrop-blur-sm border border-white/10" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
        <ChevronRight size={22} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/50 text-xs font-body tracking-wider">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

/* ── Gallery ── */
const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const goPrev = useCallback(() => setLightboxIndex((p) => (p === 0 ? galleryImages.length - 1 : p - 1)), []);
  const goNext = useCallback(() => setLightboxIndex((p) => (p === galleryImages.length - 1 ? 0 : p + 1)), []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }), { threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Hotel Rahgir &amp; Guest House Chikhli Near Valsad</title>
        <meta name="description" content="Browse photos of Hotel Rahgir & Guest House in Chikhli near Valsad. See our rooms, restaurant, garden area, and hotel facilities." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-brand py-20 md:py-28 text-center overflow-hidden noise-overlay">
        <div className="orb w-72 h-72 bg-gold-400/5 -top-20 -right-20 animate-float" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="text-gold-400/60 text-xs tracking-[0.3em] uppercase font-body">Explore</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Our Gallery
          </h2>
          <p className="text-gray-500 font-body text-base md:text-lg max-w-2xl mx-auto">
            A glimpse of our peaceful ambiance, modern amenities, and welcoming spaces
          </p>
        </div>
      </section>

      {/* Grid */}
      <WaveDivider color="#FDF6E8" />
      <section className="py-16 md:py-24 px-4 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryImages.map((image, index) => (
              <div key={index} className="reveal break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer gradient-border bg-white shadow-sm" onClick={() => setLightboxIndex(index)}>
                <img src={image} alt={`Hotel Rahgir view ${index + 1}`} loading="lazy" className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-5">
                  <span className="text-white text-sm font-body font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Photo</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && <Lightbox images={galleryImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={goPrev} onNext={goNext} />}
    </>
  );
};

export default Gallery;
