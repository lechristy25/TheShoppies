import React from 'react'; 

import Result from './Result/Result'

import classes from './Results.module.css';

const Results = (props) => {
    const resultOutput = props.results.map(result => {
        console.log(result)
        return <Result title={result.Title} year={result.Year} id={result.imdbID} key={result.imdbID}/>
    })

    return(
        <div className={classes.Results}>
            {resultOutput}
        </div>
    );
}

export default Results;