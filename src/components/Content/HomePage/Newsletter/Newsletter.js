import React from 'react'

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="headline-newsletter">
                <h1>Tilmeld dig vores nyhedsbrev</h1>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
            </div>
            <form action="/">
                <i className="far fa-envelope"></i>
                <input type="text" placeholder="indtast din email..." className="email"/>
                <input type="button" value="tilmeld" className="subscribe"/>
            </form>
        </div>
    )
}
