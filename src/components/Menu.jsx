const menuData = {
    "Chinese Soups": [
        "Cream of Tomato Soup",
        "Hot 'n' Sour Soup",
        "Manchow Soup"
    ],
    "Starters": [
        "Paneer Chilli Dry",
        "Veg. Manchurian Dry",
        "Paneer Manchurian Dry",
        "Veg. Lollipop",
        "Veg. Hara Bhara Kabab"
    ],
    "Chinese Main Course": [
        "Veg. Hakka Noodle",
        "Chilli Garlic Noodle",
        "Schezwan Noodle",
        "Paneer Chilli Gravy",
        "Veg. Manchurian Gravy",
        "Paneer Manchurian Gravy"
    ],
    "Chinese Rice": [
        "Veg. Fried Rice",
        "Schezwan Fried Rice",
        "Mushroom Fried Rice"
    ],
    "Salad, Papad & Raita": [
        "Green Salad",
        "Tomato Salad",
        "Veg. Raita",
        "Boondi Raita",
        "Pineapple Raita",
        "Curd",
        "Buttermilk",
        "Masala Buttermilk",
        "Roasted Papad",
        "Fried Papad",
        "Masala Papad"
    ],
    "Tea Time Snacks": [
        "Sp. Tea",
        "Ness coffee",
        "Hot Milk",
        "Toast Biscuit",
        "Papdi",
        "Special Khari"
    ],
    "Cold Drinks & Lassi": [
        "Sp. Rahgir Lassi Full",
        "Sp. Rahgir Lassi Half",
        "Lassi Sweet & Salted Full",
        "Lassi Sweet & Salted Half",
        "Lassi With Ice-Cream",
        "Fresh Lime Soda",
        "Mineral Water",
        "Soft Drinks"
    ],
    "Milkshakes": [
        "Pineapple Milkshake",
        "Chocolate Milkshake",
        "Vanilla Milkshake",
        "Mango Milkshake",
        "Kesar Pista Milkshake"
    ],
    "Sp. Parcel": [
        "Paneer Tikka Masala Full",
        "Chana Masala Full",
        "Dal Fry Full",
        "Sp. Paneer Jumbo Pack"
    ],
    "South Indian": [
        "Aloo Paratha",
        "Rahgir Sp. Dosa",
        "Plain Dosa",
        "Masala Dosa",
        "Masala Uttapam",
        "Onion Uttapam",
        "Tomato Uttapam",
        "Idli - Sambhar",
        "Vada Sambhar",
        "Dahi - Wada",
        "Sev Usal"
    ],
    "Main Course Indian Veg": [
        "Veg. Sp. Rahgir",
        "Veg. Handi",
        "Veg. Kadai",
        "Veg. Hyderabadi",
        "Veg. Kolhapuri",
        "Kaju - Curry",
        "Khoya - Kaju (Sweet)",
        "Veg. Jaipuri",
        "Mushroom Masala",
        "Veg. Makhanwala",
        "Navratna Korma (Sweet)",
        "Green Peas Masala",
        "Veg. Balti",
        "Mix Vegetable",
        "Alu Mutter",
        "Chana Masala",
        "Dal Fry",
        "Dal Fry Butter",
        "Dal Tadka"
    ],
    "Main Course Indian Paneer": [
        "Paneer Tikka Masala Full",
        "Paneer Tikka Masala",
        "Paneer Handi",
        "Paneer Kadai",
        "Paneer Bhurji",
        "Paneer Butter Masala",
        "Paneer Patiyala",
        "Palak Paneer",
        "Mutter Paneer",
        "Chole Paneer"
    ],
    "Special Dishes": [
        "Sp. Punjabi Kadhi Full",
        "Sp. Masala Khichdi Full"
    ],
    "Koftas": [
        "Kaju Kofta",
        "Malai Kofta",
        "Cheese Kofta"
    ],
    "Basmati Rice & Pulao": [
        "Sp. Rahagir Dry Fruit Pulav",
        "Kaju Pulav",
        "Veg. Pulav",
        "Veg. Biryani",
        "Hyderabadi Biryani",
        "Jeera Rice",
        "Plain Rice",
        "Masala Fried Rice",
        "Steam Rice"
    ],
    "Indian Bread": [
        "Chapati",
        "Chapati Butter",
        "Chapati Butter Paratha",
        "Tandoori Plain Roti",
        "Tandoori Butter Roti",
        "Tandoori Butter Paratha",
        "Tandoori Butter Naan",
        "Butter Kulcha",
        "Garlic Naan"
    ],
    "Our Special Paneer": [
        "Paneer Mumtaz",
        "Paneer Mushroom Masala",
        "Paneer Peshawari",
        "Paneer Laziz",
        "Paneer Chatpata",
        "Paneer Kaju Masala",
        "Paneer Toofani",
        "Paneer Lajakat",
        "Paneer Angara"
    ],
    "Our Special Vegetable": [
        "Veg. Bhagwan",
        "Veg. Hara Bageecha",
        "Veg. Chatpata",
        "Veg. Rangila",
        "Veg. Toofani",
        "Veg. Tiranga",
        "Veg. Khazana"
    ],
    "Cone": [
        "Butterscotch",
        "Chocolate",
        "Kesar Pista",
        "Cassata Cut"
    ],
    "Candy": [
        "Chocobar",
        "Raspberry Dolly",
        "Mango Dolly",
        "Zulu Bar"
    ],
    "Ice Cream (Jumbo Cup)": [
        "Lonavala",
        "Chocolate Chips",
        "Rajbhog"
    ],
    "Ice Cream (Big Cup)": [
        "Vanilla",
        "Butterscotch",
        "Kaju Draksh",
        "Kesar Pista"
    ],
    "Ice Cream (Small cup)": [
        "Vanilla"
    ]

};

const Menu = () => (
  <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 px-4 sm:px-6 lg:px-16">
    <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12 drop-shadow-sm font-serif">
      Our Menu
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(menuData).map(([category, items]) => (
        <div
          key={category}
          className="bg-white rounded-2xl border border-yellow-200 shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col min-h-[180px] max-h-[400px]"
        >
          <h3 className="text-xl font-semibold text-yellow-700 mb-4 border-b border-yellow-300 pb-2">
            {category}
          </h3>

          <ul className="overflow-y-auto list-disc pl-5 space-y-2 text-gray-700 text-base leading-relaxed flex-grow pr-2">
            {items.map((item, index) => (
              <li key={index} className="hover:text-yellow-800 transition duration-150 ease-in-out">
                {item}
              </li>
            ))}
          </ul>
        </div>

      ))}
    </div>
  </div>
);

export default Menu;
