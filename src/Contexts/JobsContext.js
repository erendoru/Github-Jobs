import React from 'react'

export const Store = React.createContext();

const initialState = {
    jobs: [],
    city: '',
    search: '',
    fulltime: Boolean,

}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, jobs: action.payload };
        case 'ADD_CITY':
            return { ...state, city: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}