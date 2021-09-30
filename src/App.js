import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Title } from "./components/title";
import { Frame } from "./components/frame";

const APP_ID = 'd3f745d37052d30ab8fb8bb5dea8eb55';
const LATITUDE = '32.7767';
const  LONGITUDE = '-96.7970';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const toggleUnit = () => setUnits(units === 'imperial' ? 'metric' : 'imperial');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${APP_ID}&units=${units}`)
    .then(response => response.json())
    .then(data => {
      setWeather(data);
      setIsLoading(false)
    })
  },[units]);

  return (
    <Container>
      <Title></Title>
      {!isLoading && weather && <Frame weather={weather} units={units} toggleUnit={toggleUnit}></Frame>}
      {isLoading && !weather && 'Loading...'}
    </Container>
  );
}

export default App;
