import "./currentWeather.css"

import React from 'react'

export default function CurrentWeather() {
    return (
        <>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">Nairobi</p>
                        <p className="weatherDescription">Rainy</p>
                    </div>
                    <img src="icons/storm.png" alt="weather" className="weatherIcon" />

                </div>
            </div>
        </>
    )
}
