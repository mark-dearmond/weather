import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import Moment from 'react-moment';
import moment from 'moment';
import './styles.css';

export const Day = ({day, index}) => {
    let dayOfTheWeek = moment().add(index, 'days');
    return (
        <Col className="day text-center" sm>
            <Row className="align-items-center">
                <Col xs={4} sm={12}>
                    <h4>
                        <Moment format={'ddd'}>{dayOfTheWeek}</Moment>
                    </h4>
                </Col>
                <Col xs={4} sm={12}>
                    <WeatherIcon iconId={day.weather[0].id} name="owm" className="my-4"></WeatherIcon>
                </Col>
                <Col xs={4} sm={12}>
                    <h2>{parseInt(day.temp.day)}&deg;</h2>
                </Col>
            </Row>
        </Col>
    )
}
