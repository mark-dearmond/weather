import React from 'react'
import { Toggle } from '../toggle';
import { Stack } from 'react-bootstrap';
import { WeatherIcon } from 'weather-react-icons';
import './styles.css';

export const Header = () => {

    return (
        <Stack direction="horizontal" className="header" gap={3}>
            <h1>93&deg;</h1>
            <WeatherIcon iconId={200} name="owm"></WeatherIcon>
            <div>
                <h4>Partly Cloudy</h4>
                <h4>12 mph</h4>
            </div>
            <div className="ms-auto">
                <Toggle></Toggle>
            </div>
        </Stack>
    )
}
