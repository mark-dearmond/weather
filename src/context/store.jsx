import React, { createContext, useReducer } from 'react';

const initialState = {
    fahrenheit: null,
    celsius: null,
    units: 'fahrenheit',
    isLoading: false
};

export const store = createContext(initialState);

const { Provider } = store;

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const currentState = {...state};
        switch(action.type) {
            case "TOGGLE_UNITS" :
                currentState.units = action.payload;
                return currentState
            case "IS_LOADING" :
                currentState.isLoading = action.payload;
                return currentState
            case "SET_FAHRENHEIT" :
                currentState.fahrenheit = action.payload;
                return currentState
            case "SET_CELSIUS" :
                    currentState.celsius = action.payload;
                    return currentState
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

