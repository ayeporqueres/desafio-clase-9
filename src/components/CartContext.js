import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    function addItem(item, quantity) {
        let isInCart = false;
        let indice = 0;
        let arrayAux = [...carrito];
        let objAux = { ...item, cantidad: quantity }
        objAux.cantidad = quantity;
        
        arrayAux.forEach((element, index) => {
            if (element.id === item.id) {
                isInCart = true;
                indice = index;
            }
        });

        if (!isInCart) {    
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
