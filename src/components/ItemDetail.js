import ItemCount from './ItemCount'
import './styles/DetalleProducto.css';
import imagenes from '../assets/img';

const ItemDetail = ({ item: { descripcion, precio, stok, seccion } }) => {
    function onAdd(valor) {
        alert(`Agregaste ${valor} item${valor > 1 ? 's' : ''}`);
    }
    return (
        <div id='mostrarDetalles'>
            <img src={imagenes[seccion]} alt="" />
            <h3>Descripion: {descripcion}</h3>
            <h3>Valor: U$S {precio}</h3>
            <h3>Cantidad en stok: {stok}</h3>
            <h3>Clasificación: {seccion}</h3>
            <ItemCount stock={stok} initial={1} onAdd={onAdd} />
        </div>
    );
}

export default ItemDetail;
