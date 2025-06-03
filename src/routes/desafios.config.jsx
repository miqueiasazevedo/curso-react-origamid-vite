import Introducao from '../challenges/1-desafio-introducao/Introducao';
import Arrays from '../challenges/2-desafio-arrays/Arrays';
import Form from '../challenges/7-desafio-form/Form';
import DesafioProdutos from '../challenges/3-desafio-products/DesafioProdutos';
import Products from '../challenges/4-desafio-load-products/Products';
import LoadPreferenceProduct from '../challenges/6-desafio-preferences-product/LoadPreferenceProduct';
import Product from '../challenges/5-desafio-load-products-use-context/Product';
import GlobalStorage from '../challenges/5-desafio-load-products-use-context/GlobalContext';
import SubmitForm from '../challenges/9-desafio-submit-form/SubmitForm';
import FormStep from '../challenges/8-desafio-multi-step-form/FormStep';
import Slide from '../challenges/10-desafio-slider/Slide';


const desafios = [
  { path: 'introducao', label: 'Introdução', element: <Introducao /> },
  { path: 'arrays', label: 'Arrays', element: <Arrays /> },
  { path: 'forms', label: 'Formulários', element: <Form /> },
  { path: 'produtos', label: 'Produtos', element: <DesafioProdutos /> },
  { path: 'load-produtos', label: 'Produtos carregados', element: <Products /> },
  { path: 'preferencias', label: 'Persistência de Preferências', element: <LoadPreferenceProduct /> },
  { path: 'context', label: 'Uso de contexto', element: <GlobalStorage><Product /></GlobalStorage> },
  { path: 'form-submit', label: 'Envio de formulário', element: <SubmitForm /> },
  { path: 'form-step', label: 'Formulário por multi-passos', element: <FormStep /> },
  { path: 'slide', label: 'Slide', element: <Slide /> },
];

export default desafios;