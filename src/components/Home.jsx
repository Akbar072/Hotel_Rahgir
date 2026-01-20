import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import GalleryImages from "../data/GalleryImages";
import SectionTitle from "./SectionTitle";

const Home = () => {
  useEffect(() => {
    const animate = () => {
      document.querySelectorAll(".fade-in").forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove("opacity-0", "translate-y-8");
          el.classList.add("opacity-100", "translate-y-0");
        }, i * 150);
      });
    };
    animate();
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Hotel Rahgir & Guest House | Best Hotel in Chikhli Near Valsad
        </title>
        <meta
          name="description"
          content="Hotel Rahgir & Guest House in Chikhli near Valsad offers comfortable rooms, clean stay, delicious vegetarian food, and excellent hospitality for families and business travelers."
        />
      </Helmet>
      {/* ======================================= */}

      <div className="text-center bg-gradient-to-br from-white via-yellow-50 to-white pb-16">
        {/* Hero Slider */}
        <section className="relative w-full fade-in opacity-0 translate-y-8 transition-all duration-700 ease-out mt-8 mb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
              className="w-full rounded-2xl overflow-hidden"
            >
              {GalleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full aspect-video max-w-screen-lg mx-auto lg:max-h-[500px] rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={`Hotel Rahgir & Guest House Chikhli room view ${
                        index + 1
                      }`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper arrows */}
            <style>
              {`
                .swiper-button-prev,
                .swiper-button-next {
                  color: #1f2937;
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
            At{" "}
            <span className="font-semibold text-yellow-700">
              Hotel Rahgir & Guest House
            </span>
            , we offer a peaceful and comfortable stay in{" "}
            <span className="font-medium text-yellow-700">Chikhli</span>, located
            conveniently near{" "}
            <span className="font-medium text-yellow-700">Valsad</span>. Our
            hotel is known for cleanliness, hospitality, and delicious pure
            vegetarian food.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Whether you are visiting for business, family functions, or leisure
            travel,{" "}
            <span className="font-medium text-yellow-700">
              Hotel Rahgir & Guest House
            </span>{" "}
            provides comfortable rooms, friendly service, and a relaxing
            environment to make your stay memorable.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
