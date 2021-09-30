import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { Day } from "../day";
import { store } from '../../context/store';
import './styles.css';

export const Forecast = () => {
    const { state, dispatch } = useContext(store);
    const days = [...state[state.units].daily.slice(0,5)];
    return (
        <Row className="forecast">
            {days.map((day, index) => (
                <Day day={day} index={index} key={index}></Day>
            ))}
        </Row>
    )
}
