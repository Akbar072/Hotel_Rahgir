import SectionTitle from "./SectionTitle";

const Tariff = () => (
  <div className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 py-16 px-4 sm:px-8 lg:px-16">
    <SectionTitle>Our Tariff</SectionTitle>

    {/* Tariff Table */}
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border-collapse bg-white rounded-2xl shadow-md overflow-hidden text-left">
        <thead>
          <tr className="bg-yellow-100 text-yellow-900 text-sm uppercase tracking-wider">
            <th className="py-3 px-6">Room Type</th>
            <th className="py-3 px-6">Single(Taxes included)</th>
            <th className="py-3 px-6">Double(Taxes included)</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm font-medium divide-y divide-gray-200">
          <tr className="hover:bg-yellow-50 transition duration-200">
            <td className="py-4 px-6">Non-AC</td>
            <td className="py-4 px-6">₹730</td>
            <td className="py-4 px-6">₹850</td>
          </tr>
          <tr className="hover:bg-yellow-50 transition duration-200">
            <td className="py-4 px-6">AC Room</td>
            <td className="py-4 px-6">₹1300</td>
            <td className="py-4 px-6">1300</td>
          </tr>
          <tr className="hover:bg-yellow-50 transition duration-200">
            <td className="py-4 px-6">Deluxe</td>
            <td className="py-4 px-6">₹1400</td>
            <td className="py-4 px-6">₹1400</td>
          </tr>
          <tr className="hover:bg-yellow-50 transition duration-200">
            <td className="py-4 px-6">Extra Person</td>
            <td className="py-4 px-6" colSpan="2">₹250</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Notes */}
    <div className="mt-8 bg-white border border-yellow-100 rounded-xl shadow-sm p-6 text-gray-700 space-y-2 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
      <p><strong>Check-Out Time:</strong> 12:00 Noon</p>
      <p><strong>Note:</strong> All taxes are applicable as per government norms.</p>
      <p>Rates are subject to change without prior notice.</p>
    </div>

    {/* Room Image */}
    <div className="mt-10 flex justify-center">
      <img
        src="/room_example.jpeg"
        alt="Spacious and clean room"
        className="rounded-2xl shadow-lg w-full max-w-2xl border border-yellow-100"
      />
    </div>
  </div>
);

export default Tariff;
