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

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${APP_ID}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      setWeather(data);
    })
  },[])

  return (
    <Container>
      <Title></Title>
      <Frame></Frame>
    </Container>
  );
}

export default App;
