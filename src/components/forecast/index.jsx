import React from 'react'
import { Row } from 'react-bootstrap';
import { Day } from "../day";
import './styles.css';

export const Forecast = ({weather}) => {
    const days = [...weather.daily.slice(0,5)];
    return (
        <Row className="forecast">
            {days.map((day, index) => (
                <Day day={day} index={index} key={index}></Day>
            ))}
        </Row>
    )
}
