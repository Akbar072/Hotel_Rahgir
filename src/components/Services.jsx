import {
  AlarmClock,
  BedDouble,
  Coffee,
  Hotel,
  ParkingCircle,
  ShieldCheck,
  ShowerHead,
  Smile,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: <Hotel size={32} className="text-yellow-700" />,
    label: "Delicious Multi-Cuisine Vegetarian Restaurant",
  },
  {
    icon: <Coffee size={32} className="text-yellow-700" />,
    label: "Tea & Coffee Available Anytime",
  },
  {
    icon: <ShieldCheck size={32} className="text-yellow-700" />,
    label: "Clean & Hygienic Environment",
  },
  {
    icon: <ParkingCircle size={32} className="text-yellow-700" />,
    label: "Ample Parking Facility",
  },
  {
    icon: <Smile size={32} className="text-yellow-700" />,
    label: "Friendly & Professional Staff",
  },
  {
    icon: <AlarmClock size={32} className="text-yellow-700" />,
    label: "24-Hour Room Service",
  },
  {
    icon: <BedDouble size={32} className="text-yellow-700" />,
    label: "Comfortable & Well-Furnished Rooms",
  },
  {
    icon: <ShowerHead size={32} className="text-yellow-700" />,
    label: "24 Hour Hot & Cold Water Facility",
  },
];

const Services = () => (
  <>
    {/* ================= SEO ================= */}
    <Helmet>
      <title>
        Hotel Services | Hotel Rahgir & Guest House Chikhli Near Valsad
      </title>
      <meta
        name="description"
        content="Discover hotel services at Hotel Rahgir & Guest House in Chikhli near Valsad including comfortable rooms, restaurant, parking, 24-hour service, hygienic environment and warm hospitality."
      />
    </Helmet>
    {/* ======================================= */}

    <section className="py-16 bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      <SectionTitle>Our Services</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <p className="text-gray-800 font-semibold text-sm sm:text-base leading-snug">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
