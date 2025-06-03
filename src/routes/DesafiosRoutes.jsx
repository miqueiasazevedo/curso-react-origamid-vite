import { Route } from 'react-router-dom';

import DesafiosLayout from '../layouts/DesafiosLayout';
import desafios from "./desafios.config";

const DesafiosRoutes = (
  <Route path='/desafio' element={<DesafiosLayout />} >
    {desafios.map(({path, element}) => {
      return <Route key={path} path={path} element={element} />
    })}
  </Route>
);

export default DesafiosRoutes;