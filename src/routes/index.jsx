import {Routes, Route} from 'react-router-dom'

import Layout from '../app/layout';

import Introducao from '../challenges/1-desafio-introducao/Introducao';
import Arrays from "../challenges/2-desafio-arrays/Arrays";
import Form from "../challenges/7-desafio-form/Form";
import DesafioProdutos from "../challenges/3-desafio-products/DesafioProdutos";
import Products from "../challenges/4-desafio-load-products/Products";
import LoadPreferenceProduct from "../challenges/6-desafio-preferences-product/LoadPreferenceProduct";
import Product from "../challenges/5-desafio-load-products-use-context/Product";
import { GlobalStorage } from "../challenges/5-desafio-load-products-use-context/GlobalContext";
import SubmitForm from "../challenges/9-desafio-submit-form/SubmitForm";
import FormStep from "../challenges/8-desafio-multi-step-form/FormStep";
import Slide from "../challenges/10-desafio-slider/Slide";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route path='/introducao' element={<Introducao />}/>
            </Route>
        </Routes>
    );
}

          {/* <Slide />

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

          <Introducao /> */}