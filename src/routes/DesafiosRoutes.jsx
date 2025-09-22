import { Route } from 'react-router-dom';

import DesafiosLayout from '../layouts/DesafiosLayout';
import desafios from "./desafios.config";

const DesafiosRoutes = (
  <Route path='/desafio' element={<DesafiosLayout />}>
    {desafios.map((desafio) => (
      <Route key={desafio.path} path={desafio.path} element={desafio.element}>
        {desafio.menu && desafio.menu.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    ))}
  </Route>
);

export default DesafiosRoutes;
