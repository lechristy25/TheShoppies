import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchQuery: 'heyhey',
    results: [], 
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUERY:
            return{...state, searchQuery: action.query, error: false}
        case actionTypes.FETCH_RESULTS:
            return{...state, results: action.results, error: false}
        case actionTypes.FETCH_RESULTS_FAIL:
            return{...state, error: true}
        default:
            return state;
    }
}

export default reducer;