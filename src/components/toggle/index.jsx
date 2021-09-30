import React, { useContext } from 'react'
import { store } from '../../context/store';
import './styles.css';

export const Toggle = () => {
    const { state, dispatch } = useContext(store);
    return (
        <label className="switch">
            <input onChange={() => dispatch({type: 'TOGGLE_UNITS', payload: state.units === 'fahrenheit' ? 'celsius' : 'fahrenheit'})} type="checkbox" checked={state.units === 'fahrenheit' ? true : false}/>
            <span className="slider round"></span>
            <span className={`units ${state.units}`}></span>
        </label>
    )
}
