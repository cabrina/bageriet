import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">forside</Link>
                    </li>
                    <li>
                        <Link to="/products">produkter</Link>
                    </li>
                    <li>
                        <Link to="/" className="header-logo">bageriet</Link>
                    </li>
                    <li>
                        <Link to="/contact">kontakt</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>
            </nav>
        </div>
            
    )
}
