import React from "react";

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [Products, setProducts] = React.useState(null);

  async function fetchProducts() {
    let products = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/"
    );

    let json = await products.json();

    setProducts(json);
  }

  function clearProducts() {
    setProducts(null);
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider value={{ Products, clearProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;