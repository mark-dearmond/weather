import React, { useState } from 'react';
import './styles.css';

export const Toggle = () => {
    const [unit, setUnit] = useState('imperial');
    const handleUnitChange = () => {
        if(unit === 'imperial') {
            setUnit('metric')
        } else{
            setUnit('imperial')  
        } 
    }
    return (
        <label className="switch">
            <input onClick={handleUnitChange} type="checkbox" checked={unit === 'imperial' ? true : false}/>
            <span className="slider round"></span>
            <span className={`units ${unit}`}></span>
        </label>
    )
}
