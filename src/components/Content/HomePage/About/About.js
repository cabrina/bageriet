import React from 'react'

import bread1 from '../../../../imgs/brød/article.jpg'
import bread2 from '../../../../imgs/brød/article2.jpg'
import bread3 from '../../../../imgs/brød/article3.jpg'
export default function About() {
    return (
        <div className="about">
            <div className="headline-about">
                <h1>Vi skaber lækkert! brød</h1>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </div>
            <div className="about-creativity">
                <img src={bread1} alt=""/>
                <h2>kreativitet dyrkes</h2>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </div>
            <div className="about-love">
            <img src={bread2} alt=""/>
                <h2>vi elsker brød</h2>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </div>
            <div className="about-details">
            <img src={bread3} alt=""/>
                <h2>sans for detaljer</h2>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </div>
        </div>
    )
}
