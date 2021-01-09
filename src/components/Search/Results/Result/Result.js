import React from 'react'; 
import {connect} from 'react-redux'

import * as actions from '../../../../store/actions/index';
import classes from './Result.module.css';

const Result = (props) => {
    const movie = { 
        title: props.title, 
        year: props.year, 
        id: props.id, 
    }

    let disabled = false
    disabled = props.nominations.some(nomination => (nomination.id === props.id));

    return(
        <div className = {classes.Result}>
            <h3>
                {props.title} - {props.year}
            </h3>
            <button 
                onClick={() => props.onNominate(movie)}
                disabled={disabled}>
                Nominate this movie
            </button>
            
        </div>
    ); 
}


const matchStateWithProps = state => {
    return{nominations: state.nomination.nominations}
}

const matchDispatchWithProps = dispatch => {
    return{
        onNominate: (nomination) => dispatch(actions.nominateMovie(nomination))
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(Result);