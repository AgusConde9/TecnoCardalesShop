import './Item.css';

import { Link } from 'react-router-dom';
import React, { useContext } from 'react';


const Item = ({ info }) => {
    return (
    <Link to={`/ProyectoFinal-AgustinConde-React/detalle/ ${info.id}`} className="shoe">
        <div>
    <div>
    <img src= {info.img} alt="" />
    <h2 className='card-title'>{info.nombre}</h2>
    </div>
    </div>
    </Link>
    );
}

export default Item;