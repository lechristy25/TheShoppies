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