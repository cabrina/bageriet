import React from 'react';

import bread8 from '../../../../imgs/brød/1.png';
import bread4 from '../../../../imgs/brød/2.png';
import bread1 from '../../../../imgs/brød/3.png';
import bread7 from '../../../../imgs/brød/4.png';
import bread6 from '../../../../imgs/brød/5.png';
import bread5 from '../../../../imgs/brød/6.png';
import bread2 from '../../../../imgs/brød/7.png';
import bread3 from '../../../../imgs/brød/8.png';

export default function NewProducts() {
    return (
        <div className="news">
            <div className="headline-news">
                <h1>Nyeste bagværk</h1>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </div>
            <div className="news-grid">
                <div>
                    <img src={bread1} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread2} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread3} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread4} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread5} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread6} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread7} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
                <div>
                    <img src={bread8} alt=""/>
                    <h2>håndværker</h2>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...</p>
                    <input type="button" value="se mere"/>
                </div>
            </div>
        </div>
    )
}
