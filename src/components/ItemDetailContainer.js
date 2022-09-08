import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    useEffect(() => {
        customFetch(2000, datos[2])
            .then(data=> setDato(data))
            .catch(error => console.log(error))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Detalle del producto:</h1>
            <ItemDetail item={dato}/>
        </div>
    );
}

export default ItemDetailContainer;
