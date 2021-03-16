import React from 'react';
import './App.css';

const App = () => {

    // O código abaixo foi criado sem a utilização do Babel, por isso não utiliza o JSX.

    // return React.createElement(
    //     'a', 
    //     {href: 'https://www.google.com'},
    //     'Teste'
    // );



    //  O código abaixo foi criado já com o Babel e utilizando o JSX (Tags do HTML no JS)
    //  Essa utilização depende da instalação do Babel e dos loaders especificos do 
    // WebPack (webpack.config.js) para o funcionamento correto.

    return <a href="http://www.google.com">Babel</a>
};

export default App;