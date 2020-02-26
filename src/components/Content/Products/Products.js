import React from 'react';

import ProductsNav from './ProductsNav'
import AllProducts from './Categories/AllProducts';

export default function Products() {
    return (
        <div className="products">
            <div className="headline-products">
                <h1>Vores elskede bagværk</h1>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </div>
            <div className="products-nav">
                <ProductsNav />
            </div>
            <div className="products-grid">
                <AllProducts />
            </div>
        </div>
    )
}
