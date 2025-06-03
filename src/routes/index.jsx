import { Routes, Route, Navigate } from 'react-router-dom'
import DesafiosRoutes from './DesafiosRoutes';
import DesafiosLayout from '../layouts/DesafiosLayout';
 
export default function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/desafio" replace />} />
      { DesafiosRoutes }
    </Routes>
  );
}