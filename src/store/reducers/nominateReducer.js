import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    nominations: [], 
    limitReached: false, 
    showSuccessBanner: false, 
    showLimitBanner: false
}

const nominateMovie = (state, action) => {
    let updatedNominations = state.limitReached ? state.nominations : state.nominations.concat(action.nomination)
    let updatedLimitStatus = (updatedNominations.length === 5)
    let limitExceeded = state.nominations.concat(action.nomination).length > 5
    return {
        nominations: updatedNominations, 
        limitReached: updatedLimitStatus, 
        showSuccessBanner: updatedLimitStatus && !limitExceeded, 
        showLimitBanner: limitExceeded
    }
}

const deleteNomination = (state, action) => {
    let updatedNominations = state.nominations.filter(nomination => {
        return nomination.id !== action.nomination.id
    })
    return {
        nominations: updatedNominations, 
        limitReached: false, 
        showSuccessBanner: false, 
        showLimitBanner: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOMINATE_MOVIE:
            return {
                ...state, 
                ...nominateMovie(state, action)
            }
        case actionTypes.DELETE_NOMINATION:
            return {
                ...state, 
                ...deleteNomination(state, action)
            }
        case actionTypes.HIDE_SUCCESS_BANNER:
            return {
                ...state, 
                showSuccessBanner: false
            }
        case actionTypes.HIDE_LIMIT_BANNER:
            return {
                ...state, 
                showLimitBanner: false
            }
        default:
            return state;
    }
}

export default reducer