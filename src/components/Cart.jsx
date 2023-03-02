import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';


const Cart = () => {
 const { cart, precioTotal } = useCartContext();

 const order = {
    buyer: {
        name: "Agustin",
        email: "agustin.m.conde2@gmail.com",
        phone: "123456",
        address: "CABA"
    },
    item: cart.map(celulares => ({ id: celulares.id, nombre: celulares.nombre, precio: celulares.precio, quantity: celulares.quantity })),
    total: precioTotal(),
 }

    const handLeClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

 if (cart.length === 0) {
    return (
        <>
           <p>No hay celulares en el carrito</p>
           <Link to='/ProyectoFinal-AgustinConde-React/'>Comprar</Link>
        </>
    );
 }

    return (
        <>
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: ${precioTotal()}
        </p>
        <button onClick={handLeClick}>Comprar</button>
        </>
    )
}

export default Cart;