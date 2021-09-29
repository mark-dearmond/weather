import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './styles.css';

export const Title = () => {
    return (
        <Row className="title text-center">
            <Col>
                <h3>Dallas, TX</h3>
                <p>Saturday, Sep 16, 2018</p>
            </Col>
        </Row>
    )
}
