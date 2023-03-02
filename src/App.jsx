  import "./App.css";
  import React from "react";
  import {BrowserRouter, Routes, Route  } from 'react-router-dom';
  import Cart from './components/Cart';
  import ItemDetailContainer from './components/ItemDetailContainer';
  import  ItemListContainer  from './components/ItemListContainer';
  import  NavBar  from './components/NavBar';
  import CartProvider from './context/CartContext';

  

  function App() {
    return (
     <>
       <BrowserRouter>
         <CartProvider>
         <NavBar />
         <Routes>
           <Route path="/ProyectoFinal-AgustinConde-React/" element={<ItemListContainer />} />
           <Route path="/ProyectoFinal-AgustinConde-React/categoria/:categoriaId" element={<ItemListContainer />} />
           <Route path="/ProyectoFinal-AgustinConde-React/cart" element={<Cart />} />
           <Route path="/ProyectoFinal-AgustinConde-React/detalle/:detalleId" element={<ItemDetailContainer />} />
         </Routes>
         </CartProvider>
       </BrowserRouter>
     </>
    );
  }

  export default App;
