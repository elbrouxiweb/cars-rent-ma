import peugeot from "../assets/images/cars/peugeot_208.png"
import renaultClio5 from "../assets/images/cars/renault_clio_5.png"
import daciaSandero from "../assets/images/cars/dacia_sandero.png"
import volkswagenTRoc from "../assets/images/cars/volkswagen_t_roc.png"
import hyundaiSantaFe from "../assets/images/cars/hyundai_santa_fe.png"
import cupraFormentor from "../assets/images/cars/cuppra_formentor.png"




export const cars = [
    {
        id: 1,
        name: "Peugeot 208",
        category: "economy",
        seats: 5,
        bags: 2,
        transmission: "Auto",
        fuel: "Diesel",
        image: peugeot,
        priceMAD: 319,
        priceEUR: 30,
        pricing: {
            short: { MAD: 319, EUR: 30 },
            medium: { MAD: 289, EUR: 27 },
            long: { MAD: 259, EUR: 24 }
        }
    },
    {
        id: 2,
        name: "Renault Clio 5",
        category: "economy",
        seats: 5,
        bags: 2,
        transmission: "Auto",
        fuel: "Diesel",
        image: renaultClio5,
        priceMAD: 329,
        priceEUR: 31,
        pricing: {
            short: { MAD: 329, EUR: 31 },
            medium: { MAD: 299, EUR: 28 },
            long: { MAD: 269, EUR: 25 }
        }
    },
    {
        id: 3,
        name: "Dacia Sandero",
        category: "economy",
        seats: 5,
        bags: 2,
        transmission: "Manual",
        fuel: "Diesel",
        image: daciaSandero,
        priceMAD: 279,
        priceEUR: 26,
        pricing: {
            short: { MAD: 279, EUR: 26 },
            medium: { MAD: 249, EUR: 23 },
            long: { MAD: 229, EUR: 21 }
        }
    },
    {
        id: 4,
        name: "Volkswagen T-Roc",
        category: "SUV",
        seats: 5,
        bags: 3,
        transmission: "Auto",
        fuel: "Diesel",
        image: volkswagenTRoc,
        priceMAD: 589,
        priceEUR: 55,
        pricing: {
            short: { MAD: 589, EUR: 55 },
            medium: { MAD: 549, EUR: 51 },
            long: { MAD: 499, EUR: 46 }
        }
    },
    {
        id: 5,
        name: "Hyundai Santa Fe",
        category: "SUV",
        seats: 7,
        bags: 4,
        transmission: "Auto",
        fuel: "Diesel",
        image: hyundaiSantaFe,
        priceMAD: 749,
        priceEUR: 70,
        pricing: {
            short: { MAD: 749, EUR: 70 },
            medium: { MAD: 699, EUR: 65 },
            long: { MAD: 639, EUR: 59 }
        }
    },
    {
        id: 6,
        name: "Cupra Formentor",
        category: "sport",
        seats: 5,
        bags: 3,
        transmission: "Auto",
        fuel: "Petrol",
        image: cupraFormentor,
        priceMAD: 799,
        priceEUR: 75,
        pricing: {
            short: { MAD: 799, EUR: 75 },
            medium: { MAD: 739, EUR: 69 },
            long: { MAD: 689, EUR: 64 }
        }
    }
];

// export const cars = [
//     {
//         id: 1,
//         name: "Peugeot 208",
//         category: "economy",
//         price: 30,
//         seats: 5,
//         bags: 2,
//         transmission: "Auto",
//         fuel: "Diesel",
//         image: "/src/assets/images/cars/peugeot_208.png"
//     },
//     {
//         id: 2,
//         name: "Renault Clio 5",
//         category: "economy",
//         price: 32,
//         seats: 5,
//         bags: 2,
//         transmission: "Auto",
//         fuel: "Diesel",
//         image: "/src/assets/images/cars/renault_clio_5.png"
//     },
//     {
//         id: 3,
//         name: "Dacia Sandero",
//         category: "economy",
//         price: 29,
//         seats: 5,
//         bags: 2,
//         transmission: "Manual",
//         fuel: "Diesel",
//         image: "/src/assets/images/cars/dacia_sandero.png"
//     },
//     {
//         id: 4,
//         name: "Volkswagen T-Roc",
//         category: "SUV",
//         price: 55,
//         seats: 5,
//         bags: 3,
//         transmission: "Auto",
//         fuel: "Diesel",
//         image: "/src/assets/images/cars/volkswagen_t_roc.png"
//     },
//     {
//         id: 5,
//         name: "Hyundai Santa Fe",
//         category: "SUV",
//         price: 70,
//         seats: 7,
//         bags: 4,
//         transmission: "Auto",
//         fuel: "Diesel",
//         image: "/src/assets/images/cars/hyundai_santa_fe.png"
//     },
//     {
//         id: 6,
//         name: "Cupra Formentor",
//         category: "sport",
//         price: 75,
//         seats: 5,
//         bags: 3,
//         transmission: "Auto",
//         fuel: "Petrol",
//         image: "/src/assets/images/cars/cuppra_formentor.png"
//     }
// ];