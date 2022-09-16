/* eslint-disable react-hooks/exhaustive-deps */
import customFetch from "../mocks/promesa";
import { useEffect, useState } from "react";
import datos from '../mocks/datos';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [res, setRes] = useState([]);
    const { categoryId } = useParams();
    const [bandera, setBandera] = useState(false);
    let tiempo = 20;
    useEffect(() => {
        setBandera(false);
        if (categoryId) {
            const regexp = /_/g;
            let aux = [...categoryId.matchAll(regexp)];
            let filtro = categoryId;
            if (aux.length > 0) {
                filtro = filtro.replace(regexp, ' ');
            }
            customFetch(tiempo, datos)
                .then(data => {
                    setRes(data.filter((item) => item.seccion === filtro))
                    setBandera(true);
                })
                .catch(error => console.log(error));
        } else {
            customFetch(tiempo, datos)
            .then(data => {
                let aux = [];
                for (let i = 0; i < 10; i++) {
                    aux.push(data[Math.floor(Math.random() * data.length)]);
                    }
                    setRes(aux);
                    setBandera(true);
                })
                .catch(error => console.log(error));
        }
    }, [categoryId]);
    return (
        <>
            {bandera ? <ItemList items={res} /> : <div className="loader__container">Juan Isa programador
                <div className="loader"></div>
            </div>
            }
        </>

    );
}
export default ItemListContainer;
