import img2 from "./hotels/facade-night-view.jpeg";
import img5 from "./hotels/exterior-view.jpeg";
import img1 from "./hotels/hotel-building.jpeg";
import img3 from "./hotels/images (1).jpeg";
import img4 from "./hotels/images.jpeg";
const HotelData = [
  {
    id: 1,
    name: "Citymax hotel al barsha",
    city: "Al Fahidi Neighborhood, Bur Dubai",
    price: "416.12",
    nearHotel: [
      { id: 1, name: "Grand Plaza Movenpick Media City" },
      { id: 2, name: "Royal Falcon Hotel" },
    ],
    img: img1,
    description:
      "Citymax Hotel is located conveniently in the Al Barsha district 1, just a 2-minute walk from Mall of the Emirates, a 22-minute drive from Dubai International Airport, and a 30-minute drive from Al Maktoum International Airport.",
    termsAndconditions:
      "Care for a skiing vacation in the desert? How about shopping for gold or catching a movie in IMAX? When you’re staying at Citymax Hotel Al Barsha, it’s all just a few moments away. Choose from multiple food & beverage options such as our all-day dining restaurant City Café, 24-hour Lavazza coffee shop, the Aqua Pool Bar, and The Stag. Each of our 120 modern guest rooms provide contemporary comforts such as free WiFi and much more.",
    rating: 4,
    ticket: [
      {
        name: "Standard",
        roomType: [
          {
            type: "BB",
            cancelation: "Under Cancelation",
            adult: "2",
            child: "1",
            offers: "SUMBO38",
            price: "350",
            stayInfo: "Min Stay 1 Night",
          },
          {
            type: "RO",
            cancelation: "Under Cancelation",
            adult: "2",
            child: "1",
            offers: "SUMBO38",
            price: "350",
            stayInfo: "Min Stay 1 Night",
          },
        ],
      },
      {
        name: "Standard Room 2",
        roomType: [
          {
            type: "BB",
            cancelation: "Under Cancelation",
            adult: "2",
            child: "1",
            offers: "SUMBO38",
            price: "350",
            stayInfo: "Min Stay 1 Night",
          },
        ],
      },
      {
        name: "Delux Room",
        roomType: [
          {
            type: "BB",
            cancelation: "Under Cancelation",
            adult: "2",
            child: "1",
            offers: "SUMBO38",
            price: "350",
            stayInfo: "Min Stay 1 Night",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Grand Plaza Movenpick Media City",
    city: "Sheikh Zayed Road,Opposite Innovation Hub,Media City,Dubai",
    price: "433.58",
    nearHotel: [],
    img: img2,
    description:
      "Citymax Hotel is located conveniently in the Al Barsha district 1, just a 2-minute walk from Mall of the Emirates, a 22-minute drive from Dubai International Airport, and a 30-minute drive from Al Maktoum International Airport.",
    termsAndconditions:
      "Care for a skiing vacation in the desert? How about shopping for gold or catching a movie in IMAX? When you’re staying at Citymax Hotel Al Barsha, it’s all just a few moments away. Choose from multiple food & beverage options such as our all-day dining restaurant City Café, 24-hour Lavazza coffee shop, the Aqua Pool Bar, and The Stag. Each of our 120 modern guest rooms provide contemporary comforts such as free WiFi and much more.",
    rating: 3,
    ticket: [],
  },
  {
    id: 3,
    name: "Nihal Residency Hotel Apartments",
    city: "Behind ADCB Bank &",
    price: "230.81",
    nearHotel: [
      { id: 1, name: "Grand Plaza Movenpick Media City" },
      { id: 2, name: "Royal Falcon Hotel" },
    ],
    img: img3,
    description:
      "Citymax Hotel is located conveniently in the Al Barsha district 1, just a 2-minute walk from Mall of the Emirates, a 22-minute drive from Dubai International Airport, and a 30-minute drive from Al Maktoum International Airport.",
    termsAndconditions:
      "Care for a skiing vacation in the desert? How about shopping for gold or catching a movie in IMAX? When you’re staying at Citymax Hotel Al Barsha, it’s all just a few moments away. Choose from multiple food & beverage options such as our all-day dining restaurant City Café, 24-hour Lavazza coffee shop, the Aqua Pool Bar, and The Stag. Each of our 120 modern guest rooms provide contemporary comforts such as free WiFi and much more.",
    rating: 4,
    ticket: [],
  },
  {
    id: 4,
    name: "Tulip Creek Hotel Apartments",
    city: "Behind clock tower, Port Saeed Area",
    price: "177.06",
    nearHotel: [],
    img: img4,
    description:
      "Citymax Hotel is located conveniently in the Al Barsha district 1, just a 2-minute walk from Mall of the Emirates, a 22-minute drive from Dubai International Airport, and a 30-minute drive from Al Maktoum International Airport.",
    termsAndconditions:
      "Care for a skiing vacation in the desert? How about shopping for gold or catching a movie in IMAX? When you’re staying at Citymax Hotel Al Barsha, it’s all just a few moments away. Choose from multiple food & beverage options such as our all-day dining restaurant City Café, 24-hour Lavazza coffee shop, the Aqua Pool Bar, and The Stag. Each of our 120 modern guest rooms provide contemporary comforts such as free WiFi and much more.",
    rating: 4,
    ticket: [],
  },
  {
    id: 5,
    name: "Royal Falcon Hotel",
    city: "Salahuddin Road",
    price: "112.38",
    nearHotel: [],
    img: img5,
    description:
      "Citymax Hotel is located conveniently in the Al Barsha district 1, just a 2-minute walk from Mall of the Emirates, a 22-minute drive from Dubai International Airport, and a 30-minute drive from Al Maktoum International Airport.",
    termsAndconditions:
      "Care for a skiing vacation in the desert? How about shopping for gold or catching a movie in IMAX? When you’re staying at Citymax Hotel Al Barsha, it’s all just a few moments away. Choose from multiple food & beverage options such as our all-day dining restaurant City Café, 24-hour Lavazza coffee shop, the Aqua Pool Bar, and The Stag. Each of our 120 modern guest rooms provide contemporary comforts such as free WiFi and much more.",
    rating: 3,
    ticket: [],
  },
];

export default HotelData;
