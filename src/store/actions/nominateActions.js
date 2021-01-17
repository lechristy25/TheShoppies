import * as actionTypes from './actionTypes';


export const nominateMovie = (nomination) => {
    return {
        type: actionTypes.NOMINATE_MOVIE, 
        nomination: nomination
    }
}

export const deleteNomination = (nomination) => {
    return {
        type: actionTypes.DELETE_NOMINATION, 
        nomination: nomination
    }
}

export const hideSuccessBanner = () => {
    return{
        type: actionTypes.HIDE_SUCCESS_BANNER
    }
}

export const hideLimitBanner = () => {
    return{
        type: actionTypes.HIDE_LIMIT_BANNER
    }
}