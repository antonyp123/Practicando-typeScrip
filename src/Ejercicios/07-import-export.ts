import { calcularISV, Producto } from "./06-desestruturacion-funcion";


const carritoCompras : Producto [] = [
    {
        desc:'Telefono 1',
        precio:100
    }
];

const [total,isv]=calcularISV(carritoCompras);

console.log('total',total);
console.log('ISV',isv);

