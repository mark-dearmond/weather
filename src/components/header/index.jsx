import React from 'react'
import { Toggle } from '../toggle';
import { Stack } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import './styles.css';

export const Header = ({weather, units, toggleUnit}) => {
    return (
        <Stack direction="horizontal" className="header" gap={3}>
            <h1>{parseInt(weather.current.temp)}&deg;</h1>
            <WeatherIcon iconId={weather.current.weather[0].id} name="owm"></WeatherIcon>
            <div>
                <h4>{weather.current.weather[0].main}</h4>
                <h4>{parseInt(weather.current.wind_speed)} mph</h4>
            </div>
            <div className="ms-auto">
                <Toggle units={units} toggleUnit={toggleUnit}></Toggle>
            </div>
        </Stack>
    )
}
