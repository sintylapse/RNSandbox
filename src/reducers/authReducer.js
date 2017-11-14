const initialState = {
    exampleValue: null,
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_EXAMPLE_VALUE': return { ...state,
            exampleValue: action.exampleValue
        }
        default: return state
    }
}
