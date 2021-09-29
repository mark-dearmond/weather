import React from 'react'
import { Row, Col } from 'react-bootstrap';
import background from "../../assets/images/background.png";
import leftCloud from "../../assets/images/left-cloud.png";
import rightCloud from "../../assets/images/right-cloud.png";
import { Image } from 'react-bootstrap';
import './styles.css';

export const Skyline = () => {
    return (
        <Row className="skyline" style={{ backgroundImage: `url(${background})`}}>
            <Col>
                <Image src={leftCloud} className="cloud left-cloud"></Image>
            </Col>
            <Col>
                <Image src={rightCloud} className="cloud right-cloud"></Image>
            </Col>
        </Row>
    )
}
