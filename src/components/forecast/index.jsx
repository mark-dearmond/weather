import React from 'react'
import { Row } from 'react-bootstrap';
import { Day } from "../day";
import './styles.css';

export const Forecast = () => {
    return (
        <Row className="forecast">
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
        </Row>
    )
}
