import React from 'react'
import { Row, Col, Image, Stack } from 'react-bootstrap';
import Moment from 'react-moment';
import location from '../../assets/images/location.svg'
import './styles.css';

export const Title = () => {
    const today = new Date()
    return (
        <Row className="title text-center">
            <Col>
                {/* <h3>
                    <Image src={location}></Image>
                    <span>Dallas, TX</span>
                </h3> */}
                <Stack direction="horizontal" className="justify-content-center" gap={3}>
                    <Image src={location}></Image>
                    <h3>Dallas, TX</h3>
                </Stack>
                <p>
                    <Moment format={'dddd, MMM D, YYYY '}>{today}</Moment>
                </p>
            </Col>
        </Row>
    )
}
