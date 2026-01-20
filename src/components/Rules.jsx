import SectionTitle from "./SectionTitle";

const Rules = () => (
  <div className="bg-gradient-to-br from-white via-yellow-50 to-white py-12 px-4 sm:px-8 lg:px-16 text-gray-800">
    <SectionTitle>Our Rules</SectionTitle>

    <div className="max-w-4xl mx-auto text-left space-y-6 text-lg">
      <p>
        The following are the <strong className="text-yellow-700">Terms & Conditions</strong> for our restaurant, garden play area, and room facilities. We appreciate your cooperation in helping us maintain a peaceful and enjoyable environment for everyone.
      </p>

      <div className="space-y-12 border-l-4 border-yellow-600 pl-6">

        {/* Restaurant & Garden Area Rules */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-800 mb-6">Restaurant & Garden Game Area Rules</h3>
          <ol className="list-decimal pl-5 space-y-6 text-base text-gray-700">
            {[
              {
                title: "🚭 No Smoking or Alcohol",
                desc: "Smoking and alcohol consumption are strictly prohibited in all dining and garden areas."
              },
              {
                title: "🧹 Cleanliness",
                desc: "Please use the dustbins provided to help us maintain a clean and hygienic environment for all guests."
              },
              {
                title: "🎒 Responsibility for Belongings",
                desc: "Management is not responsible for any lost or unattended personal items in the common areas."
              },
              {
                title: "🐾 No Pets Allowed",
                desc: "Pets are not permitted within the hotel or restaurant premises."
              },
              {
                title: "👨‍👩‍👧 Supervision of Children",
                desc: "Children must be accompanied by an adult at all times in the restaurant and garden areas for safety."
              },
              {
                title: "🎠 Age-Specific Games",
                desc: "Certain games in the garden are designed only for children below 12 years. Please follow the signage instructions."
              },
              {
                title: "🍱 No Outside Food",
                desc: "Bringing food or beverages from outside is strictly prohibited in the restaurant premises."
              }
            ].map((rule, i) => (
              <li key={i}>
                <h4 className="text-lg font-semibold text-yellow-800">{rule.title}</h4>
                <p className="mt-1">{rule.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Room Tariff Section */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-800 mb-6">💰 Room Tariff (with GST)</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
            <li>Rooms with tariff less than ₹1,000/- per day: <span className="font-medium">12% GST</span></li>
            <li>Rooms with tariff ₹1,000/- to ₹7,500/- per day: <span className="font-medium">12% GST</span></li>
            <li>Rooms above ₹7,500/- per day: <span className="font-medium">18% GST</span></li>
          </ul>
        </div>

        {/* Room Usage Rules */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-800 mb-6">Room Usage Rules</h3>
          <ol className="list-decimal pl-5 space-y-6 text-base text-gray-700">
            {[
              {
                title: "💳 Settlement of Bills",
                desc: "Bills must be settled on presentation. Personal cheques are not accepted."
              },
              {
                title: "🕛 Departure",
                desc: "Check-out time is 12 noon. Extension depends on availability and may incur additional charges."
              },
              {
                title: "🛋️ Damage to Property",
                desc: "Guests will be charged for any damage caused to hotel property. Please avoid moving or removing furniture."
              },
              {
                title: "🆔 Valid ID Required",
                desc: "Guests must provide valid government-issued identification at the time of check-in."
              },
              {
                title: "🚪 Right to Refuse Stay",
                desc: "Management reserves the right to request guests to vacate the room in case of rule violations."
              },
              {
                title: "🔕 Quiet Hours",
                desc: "Please observe silence between 10:00 PM and 8:00 AM for the comfort of all guests."
              }
            ].map((rule, i) => (
              <li key={i}>
                <h4 className="text-lg font-semibold text-yellow-800">{rule.title}</h4>
                <p className="mt-1">{rule.desc}</p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  </div>
);

export default Rules;
