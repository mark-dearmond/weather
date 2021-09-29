import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import './styles.css';

export const Title = () => {
    const today = new Date()
    return (
        <Row className="title text-center">
            <Col>
                <h3>Dallas, TX</h3>
                <p>
                    <Moment format={'dddd, MMM D, YYYY '}>{today}</Moment>
                </p>
            </Col>
        </Row>
    )
}
