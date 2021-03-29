const setPositionDataReducer = (state, action) => {
    switch(action.type) {
        case 'SET_POSITION_DATA': 
            return {
                positions: action.payload};
        default: 
            return state
    }
}

export default setPositionDataReducer;