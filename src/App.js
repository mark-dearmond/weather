import React, { useEffect, useContext } from 'react';
import { Container } from "react-bootstrap";
import { Content } from "./components/content";
import { store } from './context/store';
import Loader from "react-loader-spinner";
import { BASE_URL } from './config';

function App() {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    dispatch({type: 'IS_LOADING', payload: true});
    fetch(`${BASE_URL}imperial`)
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'SET_FAHRENHEIT', payload: data})
      return fetch(`${BASE_URL}metric`)
    })
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'SET_CELSIUS', payload: data})
      dispatch({type: 'IS_LOADING', payload: false});
    })
    .catch(e => {
      alert(e.message)
    })
  },[dispatch]);

  return (
      <Container className={state.isLoading ? 'd-flex align-items-center justify-content-center' : ''}>
        {!state.isLoading && state.fahrenheit && <Content></Content>}
        {state.isLoading && <Loader className="d-flex align-items-center justify-content-center" type="TailSpin" color="#FFFFFF" height={100} width={100}/>}
      </Container> 
  );
}

export default App;
