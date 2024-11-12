import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer'

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const darkModeStyle = {
        backgroundColor: "#333",
        color: "#FFF",
        padding: "20px",
        textAlign: "center"
    }
    
    const lightModeStyle = {
        backgroundColor: "#FFF",
        color: "#000",
        padding: "20px",
        textAlign: "center"
    }

    return (
        <div style={state.mode === "dark" ? darkModeStyle : lightModeStyle}>
            <h1 className='mb-[20px]'>Counter: {state.count}</h1>
            <div className='flex items-center gap-[50px] justify-center'>
                <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "RES" })}>Reset</button>
                <button onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
                    Toggle to {state.mode === "light" ? "Dark" : "Light"} Mode
                </button>
            </div>
        </div>
    )
}

export default Counter
