import React from 'react'
import './styles.css';

export const Toggle = () => {

    return (
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
            <span className="temperature"></span>
        </label>
    )
}
