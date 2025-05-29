import {Routes, Route} from 'react-router-dom'

import Layout from '../app/layout';

import Introducao from '../challenges/1-desafio-introducao/Introducao';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route path='/introducao' element={<Introducao />}/>
            </Route>
        </Routes>
    );
}