import React from "react";
import Introducao from "./Introducao";
import Arrays from "./Arrays";
import Form from "./Form/Form";
import DesafioProdutos from "./DesafioProdutos/DesafioProdutos";
import Products from "./LoadProductsUseState/Products";
import LoadPreferenceProduct from "./LoadPreferenceProductUseEfect/LoadPreferenceProduct";
import Product from "./LoadProductWithUseContext/Product";
import { GlobalStorage } from "./LoadProductWithUseContext/GlobalContext";
import SubmitForm from "./SubmitForm/SubmitForm";
import FormStep from "./MultiStepForm/FormStep";
import Slide from "./Slider/Slide";

const App = () => {
  return (
    <>
      <Slide />

      <FormStep />

      <SubmitForm />

      <GlobalStorage>
        <Product />
      </GlobalStorage>

      <LoadPreferenceProduct />

      <Products />

      <DesafioProdutos />

      <Form />

      <Arrays />

      <Introducao />
    </>
  );
};

export default App;
