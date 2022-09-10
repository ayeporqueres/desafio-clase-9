import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        customFetch(2000, datos.find((item) => item.id === parseInt(id)))
            .then(data => setDato(data))
            .catch(error => console.log(error));
    }, [id]);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Detalle del producto:</h1>
            <ItemDetail item={dato} />
        </div>
    );
}
export default ItemDetailContainer;
