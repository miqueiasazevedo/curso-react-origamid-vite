import React from "react";
import Introducao from "../challenges/Introducao/Introducao";
import Arrays from "../challenges/Arrays/Arrays";
import Form from "../challenges/Form/Form";
import DesafioProdutos from "../challenges/DesafioProdutos/DesafioProdutos";
import Products from "../challenges/LoadProductsUseState/Products";
import LoadPreferenceProduct from "../challenges/LoadPreferenceProductUseEfect/LoadPreferenceProduct";
import Product from "../challenges/LoadProductWithUseContext/Product";
import { GlobalStorage } from "../challenges/LoadProductWithUseContext/GlobalContext";
import SubmitForm from "../challenges/SubmitForm/SubmitForm";
import FormStep from "../challenges/MultiStepForm/FormStep";
import Slide from "../challenges/Slider/Slide";

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
