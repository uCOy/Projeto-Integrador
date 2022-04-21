import React from 'react';
import './Header.css';
import logo from './img/logo.png';

function Header(){
    return(
        <div>
            {/* <header>
                <section class="menu">
                    <li><a href="./index.html"><img src={logo} id="logo" class="logo" alt=""/></a></li>
                    <ul class="divisoria">
                        <li><a href="./sobrenos.jsx" class="cormenupreto" >sobre nós</a></li> 
                        <li><a href="./sofas.jsx" class="cormenupreto" >sofás</a></li>
                        <li><a href="./produtos.jsx" class="cormenupreto" >produtos</a></li>
                        <li><a href="./contato.jsx" class="cormenupreto" id="menu">contato</a></li>               
                    </ul>           
                </section>
            </header> */}
            <nav>
                <div class="logo">
                    <a href="./index.html"><img src={logo} id="logo" class="logo" alt=""/></a>
                </div>
                <button>&#9776;</button>
                <ul>
                    <li><p><a href="./sobrenos.jsx" class="cormenupreto">sobre nós</a></p></li> 
                    <li><p><a href="./sofas.jsx" class="cormenupreto" >sofás</a></p></li>
                    <li><p><a href="./produtos.jsx" class="cormenupreto" >produtos</a></p></li>
                    <li><p><a href="./contato.jsx" class="cormenupreto" id="menu">contato</a></p></li>   
                </ul>
            </nav>
        </div>
    )
} 

export default Header;