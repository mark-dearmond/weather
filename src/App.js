import React, { useEffect, useContext } from 'react';
import { Container } from "react-bootstrap";
import { Title } from "./components/title";
import { Frame } from "./components/frame";
import { store } from './context/store';

const APP_ID = 'd3f745d37052d30ab8fb8bb5dea8eb55';
const LATITUDE = '32.7767';
const  LONGITUDE = '-96.7970';

function App() {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    dispatch({type: 'IS_LOADING', payload: true});
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${APP_ID}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'SET_FAHRENHEIT', payload: data})
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${APP_ID}&units=metric`)
    })
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'SET_CELSIUS', payload: data})
      dispatch({type: 'IS_LOADING', payload: false});
    })
    .catch(e => {
      // dispatch({type: 'ERROR', payload: e})
    })
  },[]);

  return (
      <Container>
        <Title></Title>
        {!state.isLoading && state.fahrenheit && <Frame></Frame>}
        {state.isLoading && 'Loading...'}
      </Container> 
  );
}

export default App;
