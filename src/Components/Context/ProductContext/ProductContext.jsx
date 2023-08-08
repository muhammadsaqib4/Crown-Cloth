import { createContext, useState } from "react";

export const ProductContext = createContext({
  CurrentProduct: null,
  setCurrentProduct: () => {},
});

export const ProductProvider = ({ children }) => {
  const [CurrentProduct, setCurrentProduct] = useState([
    {
      id: "1",
      img: "https://www.crown-clothes.com/images/sneakers.jpg",
      name: "Sneakers",
      Desc: "",
      price: "$50",
    },

    {
      id: "2",
      img: "https://www.crown-clothes.com/images/hats.jpg",
      name: "Hats",
      Desc: "",
      price: "$50",
    },

    {
      id: "3",
      img: "https://www.crown-clothes.com/images/jackets.jpg",
      name: "Jackets",
      Desc: "",
      price: "$80",
    },
    {
      id: "4",
      img: "https://www.crown-clothes.com/images/men.jpg",
      name: "Mens",
      Desc: "",
      price: "$150",
    },
    {
      id: "5",
      img: "https://www.crown-clothes.com/images/womens.jpg",
      name: "Woman",
      Desc: "",
      price: "$160",
    },
  ]);

  return (
    <ProductContext.Provider value={{ CurrentProduct, setCurrentProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
