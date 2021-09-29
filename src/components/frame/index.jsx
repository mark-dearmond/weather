import React from 'react'
import { Header } from "../header";
import { Skyline } from "../skyline";
import { Forecast } from "../forecast";
import './styles.css';
import { Row, Col } from 'react-bootstrap';

export const Frame = ({weather, units}) => {
    return (
        <Row className="frame">
            <Col>
                <Header weather={weather} units={units}></Header>
                <Skyline></Skyline>
                <Forecast weather={weather}></Forecast>
            </Col>
        </Row>
    )
}
