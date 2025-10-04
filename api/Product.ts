
// Make an API call to fetch products
export const fetchProducts = () => {
  console.log(`${process.env.API_URL}/products`)
    // axios.get(`${process.env.API_URL}/products`).then(response => {
    //     console.log("Products fetched:", response.data);
    //     return response;
    // }).catch(error => {
    //     console.error("Error fetching products:", error);
    //     throw error;
    // });

    // const productsResponse = await axios.get(`${process.env.API_URL}/products`, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    // });

    const data =[
  {
    id: 1,
    name: "Coca-Cola",
    price: {
      euro: 2.5,
      dollar: 2.7,
      pound: 2.3
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 95
  },
  {
    id: 2,
    name: "Pepsi",
    price: {
      euro: 2,
      dollar: 2.2,
      pound: 1.8
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 502
  },
  {
    id: 3,
    name: "Sprite",
    price: {
      euro: 1.8,
      dollar: 2,
      pound: 1.6
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 150
  },
  {
    id: 4,
    name: "Fanta",
    price: {
      euro: 2.1,
      dollar: 2.3,
      pound: 1.9
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 200
  },
  {
    id: 5,
    name: "Mountain Dew",
    price: {
      euro: 2.4,
      dollar: 2.6,
      pound: 2.2
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 751
  },
  {
    id: 6,
    name: "Dr Pepper",
    price: {
      euro: 2.3,
      dollar: 2.5,
      pound: 2.1
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 308
  },
  {
    id: 7,
    name: "7 Up",
    price: {
      euro: 1.9,
      dollar: 2.1,
      pound: 1.7
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 425
  },
  {
    id: 8,
    name: "Selecto",
    price: {
      euro: 2.6,
      dollar: 2.8,
      pound: 2.4
    },
    img: "https://freesvg.org/img/Gerald_G_Fast_Food_Drinks_(FF_Menu)_4.png",
    stock: 612
  }
]
    return {data: data};
}
