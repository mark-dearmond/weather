import React from 'react';
import './styles.css';

export const Toggle = ({units, toggleUnit}) => {
    return (
        <label className="switch">
            <input onChange={toggleUnit} type="checkbox" checked={units === 'imperial' ? true : false}/>
            <span className="slider round"></span>
            <span className={`units ${units}`}></span>
        </label>
    )
}
