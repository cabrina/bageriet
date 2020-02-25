import React from 'react';

import About from './About/About';
import Newsletter from './Newsletter/Newsletter';
import LPslider from './LPslider/Slider';
import NewProducts from './NewProducts/NewProducts'

export default function HomePage() {
    return (
        <div className="home">
            <LPslider />
            <About />
            <Newsletter />
            <NewProducts />
        </div>
    )
}
