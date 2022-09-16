import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './CartContext';
import './styles/ItemCart.css';
import imagenes from '../assets/img';

const Cart = () => {
    const { carrito, removeItem, clear } = useContext(GlobalContext);
    return (
        <div>
            {carrito.length > 0 ?
                <div className='headerCarrito'>
                    <h1>Tu carrito.</h1>
                    <button onClick={() => clear()}>Vaciar carrito</button>
                    <br></br>
                    <br></br>
                </div> :
                <div className='headerCarrito'>
                    <h2>Tenés el carrito vacio</h2>
                    <Link  to='/'>Volver a la tienda</Link>
                </div>
            }
          
            <section>
                {carrito.map((item) => {
                    return (
                        <div key={item.id} className='itenCardContainer'>
                            <img src={imagenes[item.seccion]} alt="" />
                            <div>{item.descripcion}</div>
                            <div>Precio: {item.precio}</div>
                            <div>Cantidad: {item.quantity}</div>
                            <div>U$S:{item.precio * item.quantity}</div>
                            <button onClick={() => removeItem(item.id)}>X</button>
                            <br></br>
                            <br></br>
                        </div>
                    );
                })}
            </section>
            {carrito.length > 0 &&
                <div className='itenCardContainer'>
                    El total de tu compra es: U$S {carrito.reduce((acum, el) => acum + (el.precio*el.quantity), 0)}
                </div>}
        </div>
    );
}

export default Cart;
