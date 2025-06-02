import { Routes } from 'react-router-dom'
import {DesafiosRoutes} from './DesafiosRoutes';
 
export default function AppRoutes(){
  return(
    <Routes>
      { DesafiosRoutes }
    </Routes>
  );
}