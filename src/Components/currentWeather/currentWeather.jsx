import "./currentWeather.css"

import React from 'react'

export default function CurrentWeather({ data }) {
    return (
        <>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weatherDescription">{data.weather[0].description}</p>
                    </div>
                    <img src="icons/storm.png" alt="weather" className="weatherIcon" />

                </div>

                <div className="bottom">
                    <p className="temperature">12°C</p>
                    <div className="details">
                        <div className="parameterRow">
                            <span className="parameterLabel top">Details</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">It fels like</span>
                            <span className="parameterValue">-3°C</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Wind</span>
                            <span className="parameterValue">1m/s</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Humidity</span>
                            <span className="parameterValue">30%</span>
                        </div>
                        <div className="parameterRow">
                            <span className="parameterLabel">Pressure</span>
                            <span className="parameterValue">12hPc</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
