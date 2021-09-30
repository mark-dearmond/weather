import React, { useContext } from 'react'
import { Toggle } from '../toggle';
import { Stack } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import { store } from '../../context/store';
import AnimatedNumbers from "react-animated-numbers";
import './styles.css';

export const Header = () => {
    const { state, dispatch } = useContext(store);
    return (
        <Stack direction="horizontal" className="header" gap={3}>
            <h1>
                <AnimatedNumbers 
                    animateToNumber={parseInt(state[state.units].current.temp)}
                    configs={[
                        { mass: 1, tension: 170, friction: 26 },
                        { mass: 1, tension: 170, friction: 26 }
                    ]}
                ></AnimatedNumbers>
            </h1>
            <WeatherIcon iconId={state[state.units].current.weather[0].id} name="owm"></WeatherIcon>
            <div>
                <h4>{state[state.units].current.weather[0].main}</h4>
                <h4>{parseInt(state.fahrenheit.current.wind_speed)} mph</h4>
            </div>
            <div className="ms-auto">
                <Toggle></Toggle>
            </div>
        </Stack>
    )
}
