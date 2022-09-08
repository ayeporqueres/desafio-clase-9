import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [res, setRes] = useState([]);
    useEffect(() => {
        customFetch(2000, datos)
            .then(data => setRes(data))
            .catch(error => console.log(error))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            {greeting}
            <ItemList items={res} />
        </div>
    );
}
export default ItemListContainer;
