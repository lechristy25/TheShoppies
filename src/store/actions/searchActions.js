import * as actionTypes from './actionTypes';
import axios from 'axios'; 


const setQuery = (query) => {
    return{
        type: actionTypes.SET_QUERY, 
        query: query
    }
}

const fetchResults = (results) => {
    return{
        type: actionTypes.FETCH_RESULTS, 
        results: results
    }
}

const fetchResultsFail = () => {
    return{type: actionTypes.FETCH_RESULTS_FAIL}
}

export const searchMovies = (event) => {
    return dispatch => {
        const formattedQuery = event.target.value.split(" ").join("-"); 
        dispatch (setQuery(formattedQuery))
        axios.get('http://www.omdbapi.com/?apikey=95cdb87b&s=' + formattedQuery)
            .then(response => {
                let results = []; 
                if(response.data.Search){
                    results = response.data.Search.filter(item => (
                        item.Type === "movie"
                    )).slice(0, 5)
                }
                dispatch(fetchResults(results))
            })
            .catch(_ => fetchResultsFail())
    }
}