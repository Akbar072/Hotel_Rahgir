const SectionTitle = ({ children, subtitle, light = false }) => (
  <div className="text-center mb-10">
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-wide ${
        light ? "text-white" : "text-brand"
      }`}
    >
      {children}
    </h2>

    {/* Decorative accent */}
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="h-[2px] w-12 bg-gold-400 rounded-full"></span>
      <span className="h-2 w-2 rounded-full bg-gold-400"></span>
      <span className="h-[2px] w-12 bg-gold-400 rounded-full"></span>
    </div>

    {subtitle && (
      <p
        className={`mt-4 text-base md:text-lg max-w-2xl mx-auto font-body ${
          light ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
