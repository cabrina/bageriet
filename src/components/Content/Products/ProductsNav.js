import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductsNav() {

    return (
        <div className="categories">
            <nav>
                <ul>
                    <li>
                        <Link to="/products">Baguettes</Link>
                    </li>
                    <li>
                        <Link to="/products/Boller">Boller</Link>
                    </li>
                    <li>
                        <Link to="/products/Franskbrød">Franskbrød</Link>
                    </li> 
                    <li>
                        <Link to="/products/Grovbrød">Grovbrød</Link>
                    </li>
                    <li>
                        <Link to="/products/Kager">Kager</Link>
                    </li>
                    <li>
                        <Link to="/products/Morgenbrød">Morgenbrød</Link>
                    </li>
                    <li>
                        <Link to="/products/Rugbrød">Rugbrød</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}
