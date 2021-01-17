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
        let initialSearch = []; 
        let results = [];
        axios.get('https://www.omdbapi.com/?apikey=95cdb87b&s=' + formattedQuery)
            .then(response => {
                // console.log(response)
                if(response.data.Search){
                    initialSearch = response.data.Search.filter(item => (
                        item.Type === "movie"
                    )).slice(0, 5)
                    
                }
                const array = axios.all(initialSearch.map(movie => axios.get('https://www.omdbapi.com/?apikey=95cdb87b&i=' + movie.imdbID + '&plot=short')))
                array.then(response => {
                    if(response.length > 0){
                        response.forEach(movie => results.push(movie.data))
                    }
                    dispatch(fetchResults(results))
                })
                // console.log(initialSearch)
            })
            .catch(_ => fetchResultsFail())
        

        
        // const detailedResults = Promise.all(initialSearch.map((movie) => {
        //             return axios.get('http://www.omdbapi.com/?apikey=95cdb87b&i=' + movie.imdbID + '&plot=short')
        // }))

        // console.log(detailedResults)
        // // .then(movies => console.log(movies) )
        
        // initialSearch
            //     console.log(initialSearch)
            //     initialSearch.forEach((movie, index) => {
            //         return axios.get('http://www.omdbapi.com/?apikey=95cdb87b&i=' + movie.imdbID + '&plot=short')
            //     })
                
            // })
            // .then(response =>  {
            //     results.push(response.data)
            //     console.log(results)
            // })
            // .then(dispatch(fetchResults(results)))
            
        
    }
}

