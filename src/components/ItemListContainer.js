import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [res, setRes] = useState([]);
    const { categoryId } = useParams()
    useEffect(() => {
        if (categoryId) {
            const regexp = /_/g;
            let aux = [...categoryId.matchAll(regexp)];
            let filtro = categoryId;
            if (aux.length > 0) {
                filtro = filtro.replace(regexp, ' ');
            }
            customFetch(2000, datos)
                .then(data => {
                    setRes(data.filter((item) => item.seccion === filtro))
                })
                .catch(error => console.log(error));
                
        } else {
            customFetch(2000, datos)
                .then(data => {
                    let aux = [];
                    for (let i = 0; i < 10; i++) {
                        aux.push(data[Math.floor(Math.random() * data.length)]);
                    }
                    setRes(aux);
                })
                .catch(error => console.log(error));
        }
    }, [categoryId]);
    return (
        <ItemList items={res} />
    );
}
export default ItemListContainer;
