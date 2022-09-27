import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './CartContext';
import './styles/ItemCart.css';
import imagenes from '../assets/img';
import { getFirestore } from "../firebase/firebase.config";

import { doc, updateDoc } from "firebase/firestore";

const Cart = () => {
    const { carrito, removeItem, clear, totalCart } = useContext(GlobalContext);

    function terminarCompra() {
        let usuario = {
            buyer: {
                name: 'some user',
                phone: '32132-133213-2132',
                email: 'example@email.com'
            },
            items: carrito.map(item => {
                return (
                    {
                        id: item.id,
                        title: item.descripcion,
                        price: item.precio,
                        quantity: item.quantity
                    }
                );
            }),
            date: new Date(),
            total: totalCart()
        }
        generarPedido(usuario);
        actualizarStock();
    }

    function generarPedido(datosCompraTerminada) {
        const db = getFirestore();
        const itemCollection = db.collection("orders");
        itemCollection.add(datosCompraTerminada)
            .then(res => {
                alert('Se generó un pedido con el id: ' + res.id)
                clear();
            })
            .catch(err => console.log(err))
    }

    function actualizarStock() {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get()
            .then(res => {
                res.forEach(item => {
                    carrito.forEach(el => {
                        if (item.data().id === el.id) {
                            const consulta = doc(db, "items", item.id);
                            updateDoc(consulta, { stock: el.stock - el.quantity });
                        }
                    });
                });
            })
            .catch(error => console.log(error))
    }

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
                    <Link to='/'>Volver a la tienda</Link>
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
                    El total de tu compra es: U$S {totalCart()}
                    <button onClick={terminarCompra}>Terminar la compra</button>
                </div>}
        </div>
    );
}

export default Cart;
