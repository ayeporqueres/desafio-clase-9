import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { id } = useParams();
    const [ bandera, setBandera ] = useState(false);
    useEffect(() => {
        setBandera(false);
        customFetch(2000, datos.find((item) => item.id === parseInt(id)))
            .then(data => {
                setDato(data);
                setBandera(true);
            })
            .catch(error => console.log(error));
    }, [id]);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Detalle del producto:</h1>
            <ItemDetail item={dato} bandera={bandera}/>
        </div>
    );
}
export default ItemDetailContainer;
