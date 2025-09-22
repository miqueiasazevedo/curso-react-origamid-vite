import React, { useEffect, useState } from "react";

const Produtos = () => {

    const [produtos, setProdutos] = useState(null);

    useEffect(() => {
        const produtos = fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((response) => response.json())
            .then((json) => setProdutos(json));

    }, []);

    console.log(produtos);
    
    return(
        <>
         <h1>Produtos</h1>
        </>
    );
}

export default Produtos;