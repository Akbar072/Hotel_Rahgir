import galleryImages from "../data/galleryImages";
import SectionTitle from "./SectionTitle";

const Gallery = () => (
  <div className="bg-gradient-to-br from-white via-yellow-50 to-white py-12 px-4 sm:px-8 lg:px-16">
    <SectionTitle>Our Gallery</SectionTitle>

    <p className="text-gray-600 text-center text-base max-w-2xl mx-auto mb-10">
      A glimpse of our peaceful ambiance, modern amenities, and welcoming spaces.
      Explore the beauty of Hotel Rahgir & Guest House through our photo gallery.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl border border-yellow-100 shadow-md"
        >
          <div className="aspect-video w-full">
            <img
              src={image}
              alt={`Hotel view ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
