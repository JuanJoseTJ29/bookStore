import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">Wisdomly</h1>
                <ul>
                    <li>
                        <Link to="/">Principal</Link>
                    </li>
                    <li>
                        <Link to="/books">Libros</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carrito</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Verificar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
