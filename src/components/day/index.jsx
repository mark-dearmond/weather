import React from 'react'
import { Col } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import './styles.css';

export const Day = () => {
    return (
        <Col className="day text-center" sm>
            <h4>Day</h4>
            <WeatherIcon iconId={500} name="owm" className="my-4"></WeatherIcon>
            <h2>93&deg;</h2>
        </Col>
    )
}
