export const initialState = {
    count: 0,
    mode: "light" 
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 }
        case "DEC":
            return { ...state, count: state.count - 1 }
        case "RES":
            return { ...state, count: 0 }
        case "TOGGLE_MODE":
            return { ...state, mode: state.mode === "light" ? "dark" : "light" }
        default:
            return state
    }
}
