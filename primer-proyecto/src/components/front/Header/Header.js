import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";


export const Header = () => {
  return (

    <header className= "header">
        <div>
            <h1>
                <Link to ="/" className='logo'>
                  TecnoShop
                </Link>
            </h1>
        </div>
        <div>
            <div className='header-links'>
             <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
             </ul>


            
             <ul>
                <li>
                    <Link to="/signup">Iniciar Sesion</Link>
                </li>
             </ul>

           
             <ul>
                <li>
                    <Link to="/cart"  className='cart'> Carrito
                    <i class='fas fa-cart-plus'></i>
               </Link> 
               </li>
             </ul>

            </div>
        </div>
    </header>
  )
}
export default Header

