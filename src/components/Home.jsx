import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryImages from '../data/GalleryImages';
import SectionTitle from './SectionTitle';

const Home = () => {
  useEffect(() => {
    const animate = () => {
      document.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
        }, i * 150);
      });
    };
    animate();
  }, []);

  return (
    <div className="text-center bg-gradient-to-br from-white via-yellow-50 to-white pb-16">

      {/* Hero Slider */}
      <section className="relative w-full fade-in opacity-0 translate-y-8 transition-all duration-700 ease-out mt-8 mb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={800} // Smooth transition
            className="w-full rounded-2xl overflow-hidden"
          >


            {GalleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-video max-w-screen-lg mx-auto lg:max-h-[500px] rounded-xl overflow-hidden">

                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Styling */}
          <style>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                color: #1f2937; /* Tailwind's gray-800 (dark like navbar) */
                text-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
                transition: transform 0.3s;
                font-weight: bold;
              }

              .swiper-button-prev:hover,
              .swiper-button-next:hover {
                transform: scale(1.2);
              }

              .swiper-button-prev::after,
              .swiper-button-next::after {
                font-size: 1.5rem;
              }
            `}
          </style>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 fade-in opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <SectionTitle>Welcome to Hotel Rahgir & Guest House</SectionTitle>

        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
          At <span className="font-semibold text-yellow-700">Hotel Rahgir & Guest House</span>, we embody the true meaning of hospitality with exceptional service and an unwavering commitment to your satisfaction.
          Our mission is to provide an environment of peace and tranquility, where comfort meets value. We take pride in offering a wide range of delectable vegetarian dishes for a delightful culinary experience.
        </p>

        <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          Whether you're traveling for business or leisure, alone or with family, for a single night or an extended stay,
          <span className="font-medium text-yellow-700"> Hotel Rahgir & Guest House </span>
          is the ideal choice. We are dedicated to delivering a superior experience that exceeds expectations and makes every visit pleasant.
        </p>
      </section>
    </div>
  );
};

export default Home;
