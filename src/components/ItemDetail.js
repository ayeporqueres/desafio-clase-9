import ItemCount from './ItemCount'
import './styles/DetalleProducto.css';
import imagenes from '../assets/img';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ item: { descripcion, precio, stok, seccion }, bandera }) => {
    const [ctrVista, setctrVista] = useState(true);
    function onAdd(valor) {
        alert(`Agregaste ${valor} item${valor > 1 ? 's' : ''}`);
        setctrVista(false);
    }
    return (
        <>{bandera ?
            <div id='mostrarDetalles'>
                <img src={imagenes[seccion]} alt="" />
                <h3>Descripion: {descripcion}</h3>
                <h3>Valor: U$S {precio}</h3>
                <h3>Cantidad en stok: {stok}</h3>
                <h3>Clasificación: {seccion}</h3>
                {
                    ctrVista ?
                        <ItemCount stock={stok} initial={0} onAdd={onAdd} /> :
                        <Link to='/cart'>Ir al carrito de compras</Link>
                }
            </div> :
            <div className="loader__container">
                Juan Isa programador
                <div className="loader">
                </div>
            </div>
        }
        </>
    );
}

export default ItemDetail;
