import React, { useContext } from 'react'
import { Toggle } from '../toggle';
import { Stack } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import { store } from '../../context/store';
import './styles.css';

export const Header = () => {
    const { state, dispatch } = useContext(store);
    return (
        <Stack direction="horizontal" className="header" gap={3}>
            <h1>{parseInt(state[state.units].current.temp)}&deg;</h1>
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
