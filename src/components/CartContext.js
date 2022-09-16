import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    function addItem(item, quantity) {
        let booleano = false;
        let indice = 0;
        let arrayAux = [...carrito];
        let objAux = { ...item, cantidad: quantity }
        objAux.cantidad = quantity;
        
        function isInCart(id) {
            let aux = false;
            arrayAux.forEach((element, index) => {
                if (element.id === id) {
                    aux = true;
                    indice = index;
                }
            });
            return aux;
        }
        booleano = isInCart(item.id);

        if (!booleano) {    
            arrayAux.push(objAux);
            setCarrito([...arrayAux]);
        }else{
            arrayAux[indice].cantidad += quantity;
            setCarrito([...arrayAux]);
        }
    }



    function removeItem(itemId) {
        let arrayAux = [...carrito];
            arrayAux.splice(arrayAux.findIndex((el) => el.id === itemId), 1);
        setCarrito([...arrayAux]);
    }

    function clear() {
        setCarrito([]);
    }

    return (
        <GlobalContext.Provider value={{ carrito, addItem, removeItem, clear }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
