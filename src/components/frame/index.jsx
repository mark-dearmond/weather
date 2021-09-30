import React from 'react'
import { Header } from "../header";
import { Skyline } from "../skyline";
import { Forecast } from "../forecast";
import './styles.css';
import { Row, Col } from 'react-bootstrap';

export const Frame = () => {
    return (
        <Row className="frame">
            <Col>
                <Header></Header>
                <Skyline></Skyline>
                <Forecast></Forecast>
            </Col>
        </Row>
    )
}
