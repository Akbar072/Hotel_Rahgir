import { Helmet } from "react-helmet-async";
import SectionTitle from "./SectionTitle";

const Contact = () => (
  <>
    {/* ================= SEO ================= */}
    <Helmet>
      <title>
        Contact Hotel Rahgir & Guest House | Chikhli Near Valsad
      </title>
      <meta
        name="description"
        content="Contact Hotel Rahgir & Guest House in Chikhli near Valsad for room booking, restaurant enquiry and location details. Call us or visit our hotel today."
      />
    </Helmet>
    {/* ======================================= */}

    <div className="bg-gradient-to-br from-white via-yellow-50 to-white py-12 px-4 sm:px-8 lg:px-16">
      <SectionTitle>Contact Us</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-gray-700">
        {/* Contact Info */}
        <div className="space-y-5 text-base leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hotel Rahgir & Guest House
            </h3>
            <p>
              National Highway No. 48, Vaghadhara, Chikhli – Valsad Road, Gujarat
              396375
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 5a2 2 0 012-2h3.5a1 1 0 01.95.69l1.3 3.46a1 1 0 01-.26 1.06l-1.55 1.55a9 9 0 006.1 6.1l1.55-1.55a1 1 0 011.06-.26l3.46 1.3a1 1 0 01.69.95V20a2 2 0 01-2 2h-2c-8 0-14-6-14-14V5z"
              />
            </svg>

            <a
              href="tel:+919909432530"
              className="text-blue-700 font-medium hover:underline"
            >
              +91 99094 32530
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0L4 8m4 4l-4 4m12 0h-8"
              />
            </svg>

            <a
              href="mailto:rahgir2011@gmail.com"
              className="text-blue-700 font-medium hover:underline"
            >
              rahgir2011@gmail.com
            </a>
          </div>

          {/* Website */}
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.49-9H3.51m15.17 7.36l-.71-.71M5.05 5.05l-.71-.71m0 15.12l.71-.71M18.95 5.05l.71-.71"
              />
            </svg>

            <a
              href="https://hotelrahgir.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              www.hotelrahgir.com
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Find Us on the Map
          </h3>

          <div className="rounded-xl overflow-hidden shadow-md border border-yellow-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.0504269783364!2d72.99475127476092!3d20.70817679871323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ebff6c701e99%3A0x89d7611fb30de03e!2sHotel%20Rahgir%20and%20Guest%20House%20(Pure%20Veg)!5e0!3m2!1sen!2sin!4v1750185981187!5m2!1sen!2sin"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Rahgir & Guest House Location in Chikhli near Valsad"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
