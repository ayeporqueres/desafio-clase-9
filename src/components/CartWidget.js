import './styles/CartWidget.css'
const CartWidget = ({items}) => {
    return (
        <div id='carrito'>
            <div id='notificacionCarrito'>{ items}</div>
        </div>
    );
}
export default CartWidget;
