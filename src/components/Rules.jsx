import { Helmet } from "react-helmet-async";
import SectionTitle from "./SectionTitle";

const Rules = () => (
  <>
    {/* ================= SEO ================= */}
    <Helmet>
      <title>
        Hotel Rules & Policies | Hotel Rahgir & Guest House Chikhli Near Valsad
      </title>
      <meta
        name="description"
        content="Read hotel rules, policies, check-in and check-out guidelines of Hotel Rahgir & Guest House in Chikhli near Valsad. Know restaurant rules, room usage and GST details."
      />
    </Helmet>
    {/* ======================================= */}

    <div className="bg-gradient-to-br from-white via-yellow-50 to-white py-12 px-4 sm:px-8 lg:px-16 text-gray-800">
      <SectionTitle>Our Rules</SectionTitle>

      <div className="max-w-4xl mx-auto text-left space-y-6 text-lg">
        <p>
          The following are the{" "}
          <strong className="text-yellow-700">Terms & Conditions</strong> of{" "}
          <span className="font-medium text-yellow-700">
            Hotel Rahgir & Guest House
          </span>{" "}
          located in Chikhli near Valsad. We appreciate your cooperation in
          helping us maintain a peaceful and comfortable environment for all
          guests.
        </p>

        <div className="space-y-12 border-l-4 border-yellow-600 pl-6">
          {/* Restaurant & Garden Area Rules */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Restaurant & Garden Game Area Rules
            </h3>

            <ol className="list-decimal pl-5 space-y-6 text-base text-gray-700">
              {[
                {
                  title: "🚭 No Smoking or Alcohol",
                  desc: "Smoking and alcohol consumption are strictly prohibited within hotel, restaurant, and garden areas.",
                },
                {
                  title: "🧹 Cleanliness",
                  desc: "Kindly use dustbins provided to maintain cleanliness and hygiene.",
                },
                {
                  title: "🎒 Responsibility for Belongings",
                  desc: "Management is not responsible for lost or unattended personal belongings.",
                },
                {
                  title: "🐾 No Pets Allowed",
                  desc: "Pets are not allowed inside the hotel or restaurant premises.",
                },
                {
                  title: "👨‍👩‍👧 Supervision of Children",
                  desc: "Children must be accompanied by adults for safety reasons.",
                },
                {
                  title: "🎠 Age-Specific Games",
                  desc: "Certain garden games are meant only for children below 12 years of age.",
                },
                {
                  title: "🍱 No Outside Food",
                  desc: "Outside food and beverages are strictly prohibited inside restaurant premises.",
                },
              ].map((rule, i) => (
                <li key={i}>
                  <h4 className="text-lg font-semibold text-yellow-800">
                    {rule.title}
                  </h4>
                  <p className="mt-1">{rule.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* GST Section */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Room Tariff & GST
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
              <li>
                Rooms below ₹1,000 per day:{" "}
                <span className="font-medium">12% GST</span>
              </li>
              <li>
                Rooms between ₹1,000 – ₹7,500 per day:{" "}
                <span className="font-medium">12% GST</span>
              </li>
              <li>
                Rooms above ₹7,500 per day:{" "}
                <span className="font-medium">18% GST</span>
              </li>
            </ul>
          </div>

          {/* Room Rules */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Room Usage Rules
            </h3>

            <ol className="list-decimal pl-5 space-y-6 text-base text-gray-700">
              {[
                {
                  title: "💳 Settlement of Bills",
                  desc: "All bills must be settled on presentation. Personal cheques are not accepted.",
                },
                {
                  title: "🕛 Check-Out Time",
                  desc: "Standard check-out time is 12 noon. Late check-out depends on room availability.",
                },
                {
                  title: "🛋️ Damage to Property",
                  desc: "Guests will be charged for any damage to hotel property.",
                },
                {
                  title: "🆔 Valid Identification",
                  desc: "Valid government-issued photo ID is mandatory at the time of check-in.",
                },
                {
                  title: "🚪 Right to Refuse Stay",
                  desc: "Management reserves the right to refuse or cancel stay in case of rule violations.",
                },
                {
                  title: "🔕 Quiet Hours",
                  desc: "Please maintain silence between 10:00 PM and 8:00 AM for guest comfort.",
                },
              ].map((rule, i) => (
                <li key={i}>
                  <h4 className="text-lg font-semibold text-yellow-800">
                    {rule.title}
                  </h4>
                  <p className="mt-1">{rule.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Rules;
