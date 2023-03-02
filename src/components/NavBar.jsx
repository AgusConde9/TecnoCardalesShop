import './NavBar.css';
import CartWidget from './CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='navbrand'>
                <NavLink className='navlinks' to="/ProyectoFinal-AgustinConde-React/"><h1>TecnoCardalesShop</h1></NavLink>
            </div>   
            <ul className='navlist'>
                <li>
<NavLink className='navlink' to="/ProyectoFinal-AgustinConde-React/categoria/clasicos">Iphone</NavLink>
                </li>
                <li>
<NavLink className='navlink' to="/ProyectoFinal-AgustinConde-React/categoria/modernos">Samsung</NavLink>
                </li>
                <li>
<NavLink className='navlink' to="/ProyectoFinal-AgustinConde-React/cart">
                  <CartWidget />
                 </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar;