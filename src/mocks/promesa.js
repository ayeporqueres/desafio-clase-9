let verificador = true;

export default function customFetch(tiempo, productos) {
    return new Promise((resolve, reject) => {
        if (verificador) {
            setTimeout(() => {
                resolve(productos);
            }, tiempo);
        } else {
            reject('Error, la promesa no se pudo resolver');
        }
    });
}

