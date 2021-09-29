import React, { useState } from 'react';
import './styles.css';

export const Toggle = ({units}) => {
    const handleUnitChange = () => {
        if(units === 'imperial') {
            units = 'metric';
        } else{
            units = 'imperial';
        } 
    }
    return (
        <label className="switch">
            <input onChange={handleUnitChange} type="checkbox" checked={units === 'imperial' ? true : false}/>
            <span className="slider round"></span>
            <span className={`units ${units}`}></span>
        </label>
    )
}
